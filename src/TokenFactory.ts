/**
 * The main class of the library, which can be configured to assemble random NFTs to the colleciton's specifications
 */
import random from 'random'
import fs from 'fs'
import _ from 'lodash'

import logger from './logger'

import ICollection from './interfaces/ICollection'
import IComponent from './interfaces/IComponent'
import IComponentSupply from './interfaces/IComponentSupply'
import IToken from './interfaces/IToken'
import ITokenAttribute from './interfaces/ITokenAttribute'
import IERC721Data from './interfaces/IERC721Data'
import INamer from './interfaces/INamer'
import IDescriber from './interfaces/IDescriber'

import DefaultNamer from './namer/DefaultNamer'

import ImageAssembler from './ImageAssembler'

export default class TokenFactory {

    /**
     * Class that generates names. If left null, will use "Collection Name #0000"-style behavior.
     */
    static namer: INamer | null = null

    static describer: IDescriber | null = null

    /**
     * Does a full build of the NFT collection, from creating the supply of each component to saving completed images
     * 
     * @param collection The collection to build
     */
    static async fullBuild(collection: ICollection) {
        await TokenFactory.createComponentSupply(collection)
        await TokenFactory.generateRandomTokenData(collection)
        await TokenFactory.saveTokenJson(collection)
        await TokenFactory.saveTokenImages(collection)
    }

    /**
     * Creates a "supply" for the collection so it can randomly pull in components
     * 
     * @param collection The collection on which to store the supply
     */
    static async createComponentSupply(collection: ICollection) {
        const size: number = collection.size
        const components: IComponent[] = collection.components

        logger.header("Creating Component Supply")

        components.forEach(component => {
            const supply: IComponentSupply[]  = []

            logger.log(`Creating Supply For: ${component.name}`)

            for(const option of component.options) {
                const count = option.rarity * size

                for(let i=0; i<count; i++) {
                    supply.push({
                        name: option.name,
                        componentName: component.name,
                        fileNames: option.fileNames
                    })
                }
            }

            logger.log(`--> Now Available: ${supply.length}`)

            component.supply = supply
        })

        logger.log("Supply creation complete!")
    }

    /**
     * Generates all the random token data for the collection
     * 
     * @param collection 
     */
    static async generateRandomTokenData(collection: ICollection) {
        const size: number = collection.size
        const components: IComponent[] = collection.components

        logger.header("Generating Random Token Data")

        if(this.namer == null) {
            this.namer = new DefaultNamer(collection)
        }

        const tokens: IToken[] = []
        let tokenId = collection.startTokenId ?? 0

        // TODO - remove custom witch code
        /*let reservedNoEarring = .33 * collection.size
        let noEarringRemaining = .37 * collection.size
        let reservedNoTattoo = Math.floor(.036 * collection.size)
        let noTattooRemaining = Math.ceil(.436 * collection.size)
        let outfitIndex = 0
        for(let i in components) {
            if(components[i].name == "Outfit") {
                outfitIndex = Number(i)
            }
        }*/

        for(let i = 0; i<size; i++) {
            let supply: IComponentSupply[] = []
            let attributes: ITokenAttribute[] = []

            // TODO - remove custom witch code
            let hair = ""
            let preselectOutfit = random.int(0, components[0].supply.length-1)

            for(let component of components) {
                let supplyIndex = random.int(0, component.supply.length-1)
                let supplySelected = component.supply[supplyIndex]

                // TODO - remove custom witch code
                /*if(component.name === "Hair") {
                    hair = component.supply[supplyIndex].name
                } else if(component.name === "Ear Accessory") {
                    let noEarrings = false

                    if(hair.indexOf("Flowing") > -1 ||
                        hair.indexOf("Familiar") > -1 || 
                        hair.indexOf("Cascading") > -1 ||
                        hair.indexOf("Wavy") > -1 ||
                        hair.indexOf("Long ") > -1 ||
                        hair.indexOf("Sharp") > -1
                        ) {
                            noEarrings = true
                        }

                    if(noEarrings) {
                        supplyIndex = 0
                        supplySelected = component.supply[supplyIndex]

                        reservedNoEarring--
                        noEarringRemaining--
                    } else {
                        if(reservedNoEarring >= noEarringRemaining) {
                            while(supplySelected.name == "No Earring") {
                                supplyIndex = random.int(0, component.supply.length-1)
                                supplySelected = component.supply[supplyIndex]
                            }
                        }

                        if(supplySelected.name == "No Earring") {
                            noEarringRemaining--
                        }
                    }
                } else if(component.name === "Tattoo") {
                    let outfitName = components[outfitIndex].supply[preselectOutfit].name

                    let noTattoo = outfitName.indexOf("Inked") > -1

                    if(noTattoo) {
                        supplyIndex = 0
                        supplySelected = component.supply[supplyIndex]

                        reservedNoTattoo--
                        noTattooRemaining--
                    } else {
                        if(reservedNoTattoo >= noTattooRemaining) {
                            while(supplySelected.name == "No Tattoo") {
                                supplyIndex = random.int(0, component.supply.length-1)
                                supplySelected = component.supply[supplyIndex]
                            }
                        }

                        if(supplySelected.name == "No Tattoo") {
                            noTattooRemaining--
                        }
                    }
                } else if(component.name === "Outfit") {
                    supplyIndex = preselectOutfit
                    supplySelected = component.supply[supplyIndex]
                }*/

                component.supply = component.supply.slice(0, supplyIndex).concat(component.supply.slice(supplyIndex+1))

                supply.push(supplySelected)

                // TODO - remove custom witch wrapping
                /*if(component.name != "Eyebrows" && component.name != "Over Everything") {
                    attributes.push({
                        name: component.name,
                        value: supplySelected.name
                    })
                }*/
                
            }

            tokens.push({
                tokenId,
                name: this.namer.name(tokenId),
                description: this.describer?.describe(tokenId) || collection.description,
                image: `ipfs://IPFS_HASH_HERE/${tokenId}.png`,
                externalUrl: collection.externalUrl,
                attributes,
                supply
            })

            tokenId++
        }

        collection.tokens = tokens

        logger.log("Random generation complete!")
    }

    /**
     * Writes the collection's metadata as JSON files to /output/json
     */
    static async saveTokenJson(collection: ICollection) {
        const tokens: IToken[] = collection.tokens

        logger.header("Saving Token Data as JSON")

        if(!fs.existsSync("./output")) {
            fs.mkdirSync("./output")
        }

        if(!fs.existsSync("./output/json")) {
            fs.mkdirSync("./output/json")
        }

        for(const token of tokens) {
            const data = ERC721.stringify(token)

            fs.writeFileSync(`./output/json/${token.tokenId}`, data)
        }

        logger.log("Saving token data done!")
    }

    /**
     * Writes the collection's images to /output/images
     */
    static async saveTokenImages(collection: ICollection) {
        const tokens: IToken[] = collection.tokens
        const components: IComponent[] = collection.components

        logger.header("Saving Token Images")

        if(!fs.existsSync("./output")) {
            fs.mkdirSync("./output")
        }

        if(!fs.existsSync("./output/images")) {
            fs.mkdirSync("./output/images")
        }

        if(!fs.existsSync("./output/stacks")) {
            fs.mkdirSync("./output/stacks")
        }

        const componentDict: any = {}
        const fileStacks: any = {}

        for(let component of components) {
            componentDict[component.name] = component
        }

        for(const token of tokens) {
            let fileStack: any[] = []

            for(const supply of token.supply) {
                const component = componentDict[supply.componentName]

                if(component.layers) {
                    const zIndices = component.layers.map(l => l.zIndex)
                    const fileNames = supply.fileNames

                    for(let i=0; i<zIndices.length; i++) {
                        fileStack.push({
                            zIndex: zIndices[i],
                            fileName: collection.layerPath + fileNames[i] + ".png"
                        })
                    }
                }
            }

            fileStack = _.sortBy(fileStack, ['zIndex'])
            
            const sortedFileNames = fileStack.map(f => f.fileName)

            fs.writeFileSync(`./output/stacks/${token.tokenId}.json`, JSON.stringify(sortedFileNames))

            fileStacks[token.tokenId] = sortedFileNames
        }

        logger.log("Generated file stacks!")

        const assembler = new ImageAssembler(fileStacks)
        await assembler.assemble()
    }
}

class ERC721 {
    static stringify(token: IToken): string {
        // Structure our data in the appropriate way
        const data: IERC721Data = {
            name: token.name,
            description: token.description,
            attributes: token.attributes.map(a => {
                return {
                    trait_type: a.name,
                    value: a.value
                }
            }),
            image: token.image,
            external_url: token.externalUrl
        }

        return JSON.stringify(data)
    }
}
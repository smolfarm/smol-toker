import ICollection from './interfaces/ICollection'
import IComponent from './interfaces/IComponent'
import IToken from './interfaces/IToken'
import ILayer from './interfaces/ILayer'

import { parse } from 'csv-parse/sync'

const camelPad = (input: string): string => { 
    return input
        // Look for long acronyms and filter out the last letter
        .replace(/([A-Z]+)([A-Z][a-z])/g, ' $1 $2')
        // Look for lower-case letters followed by upper-case letters
        .replace(/([a-z\d])([A-Z])/g, '$1 $2')
        // Look for lower-case letters followed by numbers
        .replace(/([a-zA-Z])(\d)/g, '$1 $2')
        .replace(/^./, function(str){ return str.toUpperCase() })
        // Remove any white space left around the word
        .trim()
}

const getPrettyName = (fileName: string): string => {
    const split = fileName.split("_")

    return split.length == 3 ? camelPad(split[0]) + " " + camelPad(split[1]) : camelPad(split[0])
}

/**
 * Class designed for assembling an ICollection programatically to enable scripting of collection assembly.
 */
export default class CollectionBlueprint implements ICollection {
    name: string = ""
    description: string = ""
    size: number = 10000

    layerPath: string = ""
    externalUrl?: string

    components: IComponent[] = []
    tokens: IToken[] = []

    constructor(name: string, size: number) {
        this.name = name
        this.size = size
    }

    /**
     * Adds a component to the blueprint based on TSV data, meant for easy scripting.
     * 
     * @param name The name of the component
     * @param zIndex The zIndex on which it should render
     * @param tsvData The TSV data to parse
     */
    addTsvComponent(name: string, zIndex: number | number[], tsvData: string, overrides?: any) {
        const options: any[] = []

        const records = parse(tsvData, {
            delimiter: '\t'
        })

        const rowLength = records[0].length

        records.forEach(r => {
            if(rowLength == 2) {
                // Two columns => fileName, rarity

                let rarity = Number(r[1])

                // Rarities are a percent
                rarity /= 100

                options.push({
                    name: getPrettyName(r[0]),
                    fileNames: [r[0].trim()],
                    rarity
                })
            } else if(rowLength == 3) {
                // Three columns => name, fileNames, rarity

                let rarity = Number(r[2])
                
                // Rarities are a percent
                rarity /= 100

                let fileNames = r[1].split(",").map(f => f.trim())

                if(typeof zIndex != 'number' && fileNames.length != zIndex.length && overrides.defaultFileNames) {
                    // TODO support more than what the witches need here
                    fileNames = [overrides.defaultFileNames[0], r[1]]
                }

                options.push({
                    name: r[0],
                    fileNames,
                    rarity
                })
            }
        })

        // Assemble our layer objects
        let layers: ILayer[] = []
        if(typeof zIndex === 'number') {
            layers.push({
                name,
                zIndex
            })
        } else {
            for(const z of zIndex) {
                layers.push({
                    name,
                    zIndex: z
                })
            }
        }

        // Assemble our actually component object
        const component: IComponent = {
            name: name,
            isAttribute: true,
            layers,
            options: options,
            supply: []
        }

        // Track the component on the object
        this.components.push(component)
    }
}
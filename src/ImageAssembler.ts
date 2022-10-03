import gm from 'gm'
import fs from 'fs'

import logger from './logger'

export default class ImageAssembler {
    size: number = 0
    assembled: number = 0

    stacks: any = {}

    constructor(stacks: any) {
        this.size = Object.keys(stacks).length
        this.stacks = stacks
    }

    async assemble() {
        logger.log("Assembling actual images.")

        let index = 0

        const { stacks, size } = this

        const promise = new Promise((resolve, reject) => {
            const assemblyLine = setInterval(() => {
                if(index < size) {
                    this.writeLayerStack(index, stacks[index], resolve)
                } else {
                    clearInterval(assemblyLine)
                }
                index++
            }, 100)
        })

        return promise
    }

    writeLayerStack(tokenId: number, stack: string[], callback: any) {
        if(!fs.existsSync(`./output/images/${tokenId}.png`)) {
            console.log(`Start Building: #${tokenId}`)

            // The output file isn't created yet and we need to use the first two layers
            gm(stack[0]).composite(stack[1]).write(`./output/images/${tokenId}.png`, (err) => {
                if(err) {
                    logger.log(err)
                }

                if(stack.length > 2)
                    this.writeLayerStack(tokenId, stack.slice(2), callback)
                else {
                    logger.log(`Image Saved: #${tokenId}`)
                    this.assembled++

                    if(this.assembled == this.size) {
                        callback()
                    }
                }
            })
        } else {
            // The output file is created, we need to add an extra layer
            gm("./output/images/" + tokenId + ".png").composite(stack[0]).write("./output/images/" + tokenId + ".png", (err) => {
                if(err) {
                    logger.log(err)
                }

                if(stack.length > 1)
                    this.writeLayerStack(tokenId, stack.slice(1), callback)
                else {
                    logger.log(`Image Saved: #${tokenId}`)
                    this.assembled++

                    if(this.assembled == this.size) {
                        callback()
                    }
                }         
            })
        }
    }
}
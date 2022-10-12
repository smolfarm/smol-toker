/**
 * Extension for automatically adding RPG aligntment to NFT metadata.
 */

import ICollection from '../interfaces/ICollection'

/**
 * Good alignments are more likely to appear.
 */
const alignments: string[] = [
    "Chaotic Good",
    "Chaotic Good",
    "Chaotic Good",
    "Neutral Good",
    "Neutral Good",
    "Lawful Good",
    "Lawful Good",
    "Lawful Good",
    
    "Chaotic Neutral",
    "Chaotic Neutral",
    "True Neutral",
    "Lawful Neutral",
    "Lawful Neutral",
    
    "Chaotic Evil",
    "Neutral Evil",
    "Lawful Evil"]

export default class RPGAlignmentExtension {
    addComponents(collection: ICollection) {
        const rarity = .0625

        collection.components.push({
            name: "Alignment",
            isAttribute: true,

            options: alignments.map(a => {
                return {
                    name: a,
                    rarity: rarity,
                    fileNames: []
                }
            }),

            layers:[],
            supply:[]
        })
    }
}
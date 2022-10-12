/**
 * Extension to automatically assign a Sun, Moon, and Rising sign to each NFT in its metadata
 */

import ICollection from '../interfaces/ICollection'

const zodiacs: string[] = ["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"]

export default class AstrologyExtension {
    addComponents(collection: ICollection) {
        const rarity = .0833333334

        collection.components.push({
            name: "Sun Sign",
            isAttribute: true,

            options: zodiacs.map(z => {
                return {
                    name: z,
                    rarity: rarity,
                    fileNames: []
                }
            }),

            layers:[],
            supply:[]
        })

        collection.components.push({
            name: "Moon Sign",
            isAttribute: true,

            options: zodiacs.map(z => {
                return {
                    name: z,
                    rarity: rarity,
                    fileNames: []
                }
            }),

            layers:[],
            supply:[]
        })

        collection.components.push({
            name: "Rising Sign",
            isAttribute: true,

            options: zodiacs.map(z => {
                return {
                    name: z,
                    rarity: rarity,
                    fileNames: []
                }
            }),

            layers:[],
            supply:[]
        })
    }
}
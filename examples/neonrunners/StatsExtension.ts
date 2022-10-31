import ICollection from "../../src/interfaces/ICollection"

const valueDistribution = [1,2,3,4,5,6,7,8,9,10,10,11,11,12,12,13,13,14,14,15,15,15,16,16,16,16,17,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,27,28,29,30]

export default class StatsExtension {
    addComponents(collection: ICollection) {
        const rarity = .02

        collection.components.push({
            name: "Intelligence",
            isAttribute: true,

            options: valueDistribution.map(a => {
                return {
                    name: a.toString(),
                    rarity: rarity,
                    fileNames: []
                }
            }),

            layers:[],
            supply:[]
        })

        collection.components.push({
            name: "Strength",
            isAttribute: true,

            options: valueDistribution.map(a => {
                return {
                    name: a.toString(),
                    rarity: rarity,
                    fileNames: []
                }
            }),

            layers:[],
            supply:[]
        })

        collection.components.push({
            name: "Tech",
            isAttribute: true,

            options: valueDistribution.map(a => {
                return {
                    name: a.toString(),
                    rarity: rarity,
                    fileNames: []
                }
            }),

            layers:[],
            supply:[]
        })

        collection.components.push({
            name: "Constitution",
            isAttribute: true,

            options: valueDistribution.map(a => {
                return {
                    name: a.toString(),
                    rarity: rarity,
                    fileNames: []
                }
            }),

            layers:[],
            supply:[]
        })

        collection.components.push({
            name: "Charisma",
            isAttribute: true,

            options: valueDistribution.map(a => {
                return {
                    name: a.toString(),
                    rarity: rarity,
                    fileNames: []
                }
            }),

            layers:[],
            supply:[]
        })

        collection.components.push({
            name: "Wisdom",
            isAttribute: true,

            options: valueDistribution.map(a => {
                return {
                    name: a.toString(),
                    rarity: rarity,
                    fileNames: []
                }
            }),

            layers:[],
            supply:[]
        })
    }
}
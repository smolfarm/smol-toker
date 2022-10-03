import ICollection from "../interfaces/ICollection"
import INamer from "../interfaces/INamer"

export default class DefaultNamer implements INamer {
    digits: number = 0
    collectionName: string = ""

    constructor(collection: ICollection) {
        this.collectionName = collection.name
        this.digits = (collection.size - 1).toString().length
    }

    name(tokenId: number) {
        const paddedId = tokenId.toString().padStart(this.digits, '0')

        return `${this.collectionName} #${paddedId}`
    }

    testBatch(size: number) {
        let names: string[] = []

        for(let i=0; i<size; i++) {
            names.push(this.name(i))
        }

        console.log(names)
    }
}
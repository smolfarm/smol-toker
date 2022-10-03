import IComponentSupply from "./IComponentSupply"
import ITokenAttribute from './ITokenAttribute'

/**
 * Represents a single, unique token in a collection.
 */
 export default interface IToken {
    tokenId: number,

    name: string,
    description: string,
    image: string,

    externalUrl?: string,

    supply: IComponentSupply[],

    attributes: ITokenAttribute[]
 }
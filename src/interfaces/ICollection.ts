import IComponent from "./IComponent"
import IToken from "./IToken"

/**
 * Represents an NFT collection
 */
export default interface ICollection {
    name: string,
    description: string,
    size: number,

    layerPath?: string,
    externalUrl?: string,
    startTokenId?: number,

    components: IComponent[],
    tokens: IToken[]
}
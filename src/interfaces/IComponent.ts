import ILayer from './ILayer'
import IComponentOption from './IComponentOption'
import IComponentSupply from './IComponentSupply'

/**
 * Interface for a component in an NFT collection.
 */
export default interface IComponent {
    name: string,

    isAttribute: boolean,

    // A component can have multiple layers or no layers
    layers: ILayer[],

    options: IComponentOption[]

    supply: IComponentSupply[]
}
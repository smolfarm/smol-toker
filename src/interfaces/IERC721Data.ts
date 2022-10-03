import IERC721Attribute from "./IERC721Attribute"

/**
 * Represents the full structure for an ERC721 token's metadata, designed for auto-conversion into JSON.
 */
export default interface IERC721Data {
    name: string,
    description: string,
    attributes: IERC721Attribute[],
    image: string,

    external_url?: string,
    animation_url?: string
}
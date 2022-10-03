export default interface INamer {
    name: (tokenId: number) => string,
    testBatch: any
}
export default interface IDescriber {
    describe: (tokenId: number) => string,
    testBatch?: any
}
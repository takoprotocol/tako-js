enum Network {
    TESTNET = 'testnet',
    MAINNET = 'mainnet',
    LOCALHOST = 'localhost'
}
enum Ecosystem {
    LENS = 'lens',
    FARCASTER = 'farcaster',
    LENS_OPEN_CURATION = 'lens_open_curation'
}

function getTakoUrl(network: Network): string {
    switch (network) {
        case Network.TESTNET:
            return "https://testapi.takoyaki.so/v2/";
        case Network.MAINNET:
            return "https://api.takoyaki.so/v2/";
        case Network.LOCALHOST:
            return "http://localhost:8000/v2/";
        default:
            return "https://api.takoyaki.so/v2/";
    }

}
export { Network, Ecosystem, getTakoUrl }
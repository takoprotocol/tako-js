enum Network {
    TESTNET = 'testnet',
    MAINNET = 'mainnet'
}
enum Ecosystem {
    LENS = 'lens',
    FARCASTER = 'farcaster',
    LENS_OPEN_CURATION = 'lens_open_curation'
}
enum Api_General {
    TakohubInfo = 'takohub_info',
    WhitelistInfo = 'whitelist_info',
    IsHashConfirmed = 'hashes/confirmed',
}
function getTakoUrl(network: Network): string {
    switch (network) {
        case Network.TESTNET:
            return "https://testapi.takoyaki.so/v2/";
        case Network.MAINNET:
            return "https://api.takoyaki.so/v2/";
        default:
            return "https://api.takoyaki.so/v2/";
    }

}
export { Network, Ecosystem, getTakoUrl, Api_General }
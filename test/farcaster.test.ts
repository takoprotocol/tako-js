import { CONSTANT, Tako } from '../src';
const tako = new Tako(CONSTANT.Network.TESTNET);
const ecosystem = tako.farcaster;
(async () => {
    try {
        curatorAccepted();
    } catch (error) {
        console.log(`error:${error}`);
    }

})()
async function indexPairs() {
    const res = await ecosystem.indexPairs([11588, 15706]);
    console.log(JSON.stringify(res));
}
async function recentCurators() {
    const res = await ecosystem.recentCurators();
    console.log(JSON.stringify(res));
}
async function curatorLastBidPrice() {
    const res = await ecosystem.curatorLastBidPrice([11654]);
    console.log(JSON.stringify(res));
}
async function curatorAccepted() {
    //const res = await ecosystem.curatorAccepted(12449, 0);
    const res = await ecosystem.curatorAccepted(undefined, 0);
    console.log(JSON.stringify(res));
}
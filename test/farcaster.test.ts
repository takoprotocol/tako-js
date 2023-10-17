import { CONSTANT, Tako } from '../src';
const tako = new Tako(CONSTANT.Network.LOCALHOST);
const ecosystem = tako.farcaster;
(async () => {
    try {
        bidsCreated();
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
async function bidsReceivedStats() {
    const res = await ecosystem.bidsReceivedStats([11588], false);
    console.log(JSON.stringify(res));
}
async function bidsCreatedStats() {
    const res = await ecosystem.bidsCreatedStats([], ["0xAA781B0e73c44E64a662CF1891a2A45176cD7932"]);
    console.log(JSON.stringify(res));
}
async function bidsConfirmingReceived() {
    const res = await ecosystem.bidsConfirmingReceived([11588]);
    console.log(JSON.stringify(res));
}
//addresses ids bidtype limit offset sort sorttype state
async function bidsCreated() {
    //addresses
    const ids = [34550];
    const addresses = ["0xAA781B0e73c44E64a662CF1891a2A45176cD7932"];
    const bidTypes = ["Cast", "Reply", "Recast"];
    //addresses(addresses). bidType(bidTypes).
    const a = ecosystem.bidsCreated.addresses(addresses).bidType(bidTypes).
        limit(10).offset(0).sort("bid_expires").DESC.state("Cancel");
    const res = await a.find();
    console.log(JSON.stringify(res));
}
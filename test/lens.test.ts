import { CONSTANT, Tako } from '../src';
const tako = new Tako(CONSTANT.Network.LOCALHOST);
const ecosystem = tako.lens;
(async () => {
    try {
        passedBids();
    } catch (error) {
        console.log(`error:${error}`);
    }

})()
async function indexPairs() {
    const res = await ecosystem.indexPairs([34550]);
    console.log(JSON.stringify(res));
}
async function recentCurators() {
    const res = await ecosystem.recentCurators();
    console.log(JSON.stringify(res));
}
async function curatorLastBidPrice() {
    const res = await ecosystem.curatorLastBidPrice([34550]);
    console.log(JSON.stringify(res));
}
async function curatorAccepted() {
    const res = await ecosystem.curatorAccepted(undefined, 0);
    console.log(JSON.stringify(res));
}
async function bidsReceivedStats() {
    const res = await ecosystem.bidsReceivedStats([34370], false);
    console.log(JSON.stringify(res));
}
async function bidsCreatedStats() {
    const res = await ecosystem.bidsCreatedStats.ids([35354]).addresses(["0x793eC059cCc2Ceeb8c6748111550b23c4e0072Bb"]).get();
    console.log(JSON.stringify(res));
}
async function bidsConfirmingReceived() {
    const res = await ecosystem.bidsConfirmingReceived([35354]);
    console.log(JSON.stringify(res));
}
async function bidsCreated() {
    const ids = [34550];
    const addresses = ["0x793eC059cCc2Ceeb8c6748111550b23c4e0072Bb"];
    const bidTypes = ["QuotedPublication", "Post", "Mirror"];
    //addresses(addresses). bidType(bidTypes).
    const a = ecosystem.bidsCreated.ids(ids).bidType(bidTypes).addresses(addresses).
        limit(3).offset(0).DESC.state("Pending");
    const res = await a.get();
    console.log(JSON.stringify(res));
}
async function bidsIgnored() {
    const ids = [34370];
    const bidTypes = ["Mirror", "Post"];
    const a = ecosystem.bidsIgnored.ids(ids).bidType(bidTypes).
        limit(3).offset(0).DESC.sort("bid_amount");
    const res = await a.get();
    console.log(JSON.stringify(res));
}
async function bidsReceived() {
    const ids = [34370];
    const bidTypes = ["Mirror", "Post", "Comment"];
    const a = ecosystem.bidsReceived.ids(ids).bidType(bidTypes).
        limit(3).offset(0).DESC.sort("bid_amount").includeIgnore(false).state("Pending");
    const res = await a.get();
    console.log(JSON.stringify(res));
}
async function passedBids() {
    const a = ecosystem.passedBids.limit(0).offset(0);
    const res = await a.get();
    console.log(JSON.stringify(res));
}
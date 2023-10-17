import { CONSTANT, Tako } from '../src';
const tako = new Tako(CONSTANT.Network.LOCALHOST);
const ecosystem = tako.lens;
(async () => {
    try {
        bidsCreated();
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
    const res = await ecosystem.bidsCreatedStats([35354], []);
    console.log(JSON.stringify(res));
}
async function bidsConfirmingReceived() {
    const res = await ecosystem.bidsConfirmingReceived([35354]);
    console.log(JSON.stringify(res));
}
async function bidsCreated() {
    const ids = [34550];
    const addresses = ["0xFA48EeEA28cE611AcA901aa6F9C3B7fa8085Db2a"];
    const bidTypes = ["QuotedPublication", "Post"];
    //addresses(addresses). bidType(bidTypes).
    const a = ecosystem.bidsCreated.ids(ids).bidType(bidTypes).
        limit(3).offset(0).DESC.state("Pass");
    const res = await a.find();
    console.log(JSON.stringify(res));
}
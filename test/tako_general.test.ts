
import { CONSTANT, Tako } from '../src';
const tako = new Tako(CONSTANT.Network.TESTNET);
//import * as tt from '../build/src';
(async () => {
    try {

    } catch (error) {
        console.log(`error:${error}`);
    }

})()
async function whitelistInfo() {
    const res = await tako.whitelistInfo("0x0154eafa0dff0e4bd75400f068e97cb436dd14c3");
    console.log(JSON.stringify(res));
}
async function isHashConfirmed() {
    const res = await tako.isHashConfirmed(["0x09df22b66b8431a3bf43bbe3cf7d2eef7f2bdf4b00afe44a6441935aaeafd93b",
        "0x09df22b66b8431a3bf43bbe3cf7d2eef7f2bdf4b00afe44a6441935aaeafd93b"]);
    console.log(JSON.stringify(res));
}
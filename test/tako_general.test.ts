
import { CONSTANT, Tako } from '../src';
const tako = new Tako(CONSTANT.Network.TESTNET);
import * as ethers from 'ethers';
const phrase = "";
const privateKey = "0xaaaabbbbaaaabbbbaaaabbbbaaaabbbbaaaabbbbaaaabbbbaaaabbbbaaaabbbb";//0xa68706Cd6607e0B8b86016971d72F85a60E8B7Ec

(async () => {
    try {
        refreshToken();
        //generateMessage();
    } catch (error) {
        console.log(`error:${error}`);
    }

})()
function getPrivateKey(phrase: string) {
    const mnemonic = ethers.Mnemonic.fromPhrase(phrase);
    const walletMnemonic = ethers.HDNodeWallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/0`);
    console.log(`address:${walletMnemonic.address} privateKey:${walletMnemonic.privateKey}`);
}

function generateMessage() {
    const res = tako.generateTokenMessage("0x0154eafa0dff0e4bd75400f068e97cb436dd14c3");
    console.log(JSON.stringify(res));
}
async function whitelistInfo() {
    const res = await tako.whitelistInfo("0x0154eafa0dff0e4bd75400f068e97cb436dd14c3");
    console.log(JSON.stringify(res));
}
async function isHashConfirmed() {
    const res = await tako.isHashConfirmed(["0x09df22b66b8431a3bf43bbe3cf7d2eef7f2bdf4b00afe44a6441935aaeafd93b",
        "0x09df22b66b8431a3bf43bbe3cf7d2eef7f2bdf4b00afe44a6441935aaeafd93b"]);
    console.log(JSON.stringify(res));
}
async function getToken() {
    const wallet = new ethers.Wallet(privateKey);
    const message = tako.generateTokenMessage(wallet.address);
    const signature = await tako.personalSignWithPrivateKey(privateKey, message);
    //const signature = await tako.personalSignWithPhrase(phrase, `m/44'/60'/0'/0/0`, message);
    const res = await tako.getToken(message, signature);
    console.log(JSON.stringify(res));
    return res;
}
async function refreshToken() {
    const res = await getToken();
    const refreshRes = await tako.refreshToken(res["refresh_token"]);
    console.log(JSON.stringify(refreshRes));
}
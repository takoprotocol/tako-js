import * as CONSTANT from '../constant';
import { Api_General } from '../constant';
import * as ethers from 'ethers';
import { get, post } from '../utils/utils';


class Tako {
    private _network: CONSTANT.Network;
    private _url: string;
    constructor(network: CONSTANT.Network) {
        this._network = network;
        this._url = CONSTANT.getTakoUrl(network);
    }
    public get network(): string {
        return this._network;
    }
    public async takoInfo() {
        const url = `${this._url}${Api_General.TakohubInfo}`;
        return await get(url);
    }
    public async whitelistInfo(address: string) {
        if (!ethers.isAddress(address)) {
            throw "invalid address";
        }
        const url = `${this._url}${Api_General.WhitelistInfo}/${address}`;
        return await get(url);
    }
    public async isHashConfirmed(hashes: string[]) {
        const url = `${this._url}${Api_General.IsHashConfirmed}`;
        const reqBody = { "hashes": hashes };
        return await post(url, reqBody);
    }
}
//import lens, farcaster class in tako class
export { Tako }
import * as CONSTANT from '../constant';
import * as ethers from 'ethers';
import { get, post } from '../utils/utils';
import { Lens } from './lens';
import { LensOpenCuration } from './lens_open_curation';
import { Farcaster } from './farcaster';

enum Api_General {
    TakohubInfo = 'takohub_info',
    WhitelistInfo = 'whitelist_info',
    IsHashConfirmed = 'hashes/confirmed',
}

class Tako {
    private _network: CONSTANT.Network;
    private _url: string;
    private _lens: Lens;
    private _lensOpenCuration: LensOpenCuration;
    private _farcaster: Farcaster;
    constructor(network: CONSTANT.Network) {
        this._network = network;
        this._url = CONSTANT.getTakoUrl(network);
        this._lens = new Lens(network, this._url);
        this._lensOpenCuration = new LensOpenCuration(network, this._url);
        this._farcaster = new Farcaster(network, this._url);
    }
    public get network(): string {
        return this._network;
    }
    public get lens(): Lens {
        return this._lens;
    }
    public get farcaster(): Farcaster {
        return this._farcaster;
    }
    public get lensOpenCuration(): LensOpenCuration {
        return this._lensOpenCuration;
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
        const _hashes = ([] as string[]).concat(hashes)
        const url = `${this._url}${Api_General.IsHashConfirmed}`;
        const reqBody = { "hashes": _hashes };
        return await post(url, reqBody);
    }


}
//import lens, farcaster class in tako class
export { Tako }
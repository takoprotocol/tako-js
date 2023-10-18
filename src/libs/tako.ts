import * as CONSTANT from '../constant';
import * as ethers from 'ethers';
import { get, post } from '../utils/utils';
import { Lens } from './lens';
import { LensOpenCuration } from './lens_open_curation';
import { Farcaster } from './farcaster';

enum Apis {
    TakohubInfo = 'takohub_info',
    WhitelistInfo = 'whitelist_info',
    IsHashConfirmed = 'hashes/confirmed',
    GetToken = 'token',
    RefreshToken = 'refresh_token',
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
    private generateDateString(): string {
        //2023-07-19T05:51:05.776Z Z UTC time
        const date = new Date();
        return date.toISOString();
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
        const url = `${this._url}${Apis.TakohubInfo}`;
        return await get(url);
    }
    public async whitelistInfo(address: string) {
        if (!ethers.isAddress(address)) {
            throw "invalid address";
        }
        const url = `${this._url}${Apis.WhitelistInfo}/${address}`;
        return await get(url);
    }
    public async isHashConfirmed(hashes: string[]) {
        const _hashes = ([] as string[]).concat(hashes)
        const url = `${this._url}${Apis.IsHashConfirmed}`;
        const reqBody = { "hashes": _hashes };
        return await post(url, reqBody);
    }
    public generateTokenMessage(address: string) {
        if (!ethers.isAddress(address)) {
            throw "invalid address";
        }
        const dateStr = this.generateDateString();
        return `https://takoyaki.so wants you to sign in with your Ethereum \naccount:\n${address}\n\nThis request will not trigger a blockchain transaction or cost any gas fees.\n\nYour authentication status will reset after 24 hours.\n\nURI: https://takoyaki.so\nIssued At:\n${dateStr}\n\n`;
    }
    public async personalSignWithPrivateKey(privateKey: string, message: string) {
        const wallet = new ethers.Wallet(privateKey);
        const signature = await wallet.signMessage(message);
        return signature;
    }
    public async personalSignWithPhrase(phrase: string, path: string, message: string) {
        const mnemonic = ethers.Mnemonic.fromPhrase(phrase);
        const wallet = ethers.HDNodeWallet.fromMnemonic(mnemonic, path);
        return await this.personalSignWithPrivateKey(wallet.privateKey, message);
    }
    public async getToken(message: string, signature: string) {
        const url = `${this._url}${Apis.GetToken}`;
        const reqBody = { "message": message, signature: signature };
        return await post(url, reqBody);
    }
    public async refreshToken(refreshToken: string) {
        const url = `${this._url}${Apis.RefreshToken}`;
        const reqBody = { "refresh_token": refreshToken };
        return await post(url, reqBody);
    }
}

export { Tako }
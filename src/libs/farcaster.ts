import * as CONSTANT from '../constant';
import { get, post } from '../utils/utils';
import { EcosystemP2p } from './ecosystem_p2p';
enum Api_Farcaster {

}
class Farcaster extends EcosystemP2p {
    constructor(network: CONSTANT.Network, url: string) {
        super(network, url, "farcaster");
        this._idsKeyName = "fids";
        this._idKeyName = "fid";
    }
    public async ignoreBid(ignore: boolean, index: number, ids?: number[]) {
        const body = { ignore: ignore, index: index };
        body[this._idsKeyName] = ids;
        return await super.ignoreBidP2p(body);
    }
    public async verifyBid(address: string, index: number, hash: string) {
        if (index == 0) {
            throw "invalid index";
        }
        if (hash == "") {
            throw "invalid hash";
        }
        const body = { address: address, index: index, hash: hash };
        return await this.verifyBidBasic(body);
    }
}

export { Farcaster }
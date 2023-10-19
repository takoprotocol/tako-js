import * as CONSTANT from '../constant';
import { EcosystemP2p } from './ecosystem_p2p';
import { PassedBids } from './get_bids';
enum Api_Lens {
    PassedBids = 'passed_bids',
}

class Lens extends EcosystemP2p {

    constructor(network: CONSTANT.Network, url: string) {
        super(network, url, "lens");
        this._idsKeyName = "profileIds";
        this._idKeyName = "profileId";
    }
    public get passedBids(): PassedBids {
        return new PassedBids(this.url, this.ecosystem, Api_Lens.PassedBids);
    }
    public async ignoreBid(ignore: boolean, index: number, platformType: string, ids?: number[]) {
        const body = { ignore: ignore, index: index, platformType: platformType };
        body[this._idsKeyName] = ids;
        return await super.ignoreBidP2p(body);
    }
    public async verifyBid(address: string, index: number, pubId: string) {
        if (index == 0) {
            throw "invalid index";
        }
        if (pubId == "") {
            throw "invalid pubId";
        }
        const body = { address: address, index: index, pubId: pubId };
        return await this.verifyBidBasic(body);
    }
}

export { Lens }
import * as CONSTANT from '../constant';
import { get, post } from '../utils/utils';
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
}

export { Lens }
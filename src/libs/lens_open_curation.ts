import * as CONSTANT from '../constant';
import { EcosystemOpenCuration } from './ecosystem_open_curation';
import { get, post } from '../utils/utils';
import { PassedBids } from './get_bids';
enum Api_Lens_Open_Curation {
    PassedBids = 'passed_bids',
}
class LensOpenCuration extends EcosystemOpenCuration {
    constructor(network: CONSTANT.Network, url: string) {
        super(network, url, "lens/open_curation");
        this._idsKeyName = "profileIds";
        this._idKeyName = "profileId";
    }
    public get passedBids(): PassedBids {
        return new PassedBids(this.url, this.ecosystem, Api_Lens_Open_Curation.PassedBids);
    }
}

export { LensOpenCuration }
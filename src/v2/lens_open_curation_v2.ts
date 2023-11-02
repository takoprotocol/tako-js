import * as CONSTANT from '../constant';
import { EcosystemOpenCuration } from '../ecosystem';
import { PassedBids } from '../libs';
import { env } from '../utils';

enum Api_Lens_Open_Curation {
    PassedBids = 'passed_bids',
}
class LensOpenCurationV2 extends EcosystemOpenCuration {
    constructor(network: CONSTANT.Network, url: string) {
        super(network, url, env.Ecosystem.LENS_OPEN_CURATION_V2, "profileIds", "profileId");
    }
    public get passedBids(): PassedBids {
        return new PassedBids(this.url, this.ecosystem, Api_Lens_Open_Curation.PassedBids);
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

export { LensOpenCurationV2 }
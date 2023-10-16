import * as CONSTANT from '../constant';
import { Ecosystem } from './ecosystem';
import { get, post } from '../utils/utils';
enum Api_Lens_Open_Curation {

}
class LensOpenCuration extends Ecosystem {
    constructor(network: CONSTANT.Network, url: string) {
        super(network, url, "lens/open_curation");
    }
    public async indexPairs(profileIds: number[]) {
        return await super.indexPairs(profileIds, "profileIds");
    }
    public async curatorLastBidPrice(profileIds: number[]) {
        return await super.curatorLastBidPrice(profileIds, "profileIds");
    }
    public async curatorAccepted(profileId: number | undefined, cursor: number | undefined) {
        return await super.curatorAccepted(profileId, cursor, "profileId");
    }
}

export { LensOpenCuration }
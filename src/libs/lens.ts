import * as CONSTANT from '../constant';
import { get, post } from '../utils/utils';
import { Ecosystem } from './ecosystem';
enum Api_Lens {

}

class Lens extends Ecosystem {
    constructor(network: CONSTANT.Network, url: string) {
        super(network, url, "lens");
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

export { Lens }
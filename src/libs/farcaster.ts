import * as CONSTANT from '../constant';
import { get, post } from '../utils/utils';
import { Ecosystem } from './ecosystem';

enum Api_Farcaster {

}
class Farcaster extends Ecosystem {
    constructor(network: CONSTANT.Network, url: string) {
        super(network, url, "farcaster");
    }
    public async indexPairs(fids: number[]) {
        return await super.indexPairs(fids, "fids");
    }
    public async curatorLastBidPrice(fids: number[]) {
        return await super.curatorLastBidPrice(fids, "fids");
    }
    public async curatorAccepted(fid: number | undefined, cursor: number | undefined) {
        return await super.curatorAccepted(fid, cursor, "fid");
    }

}

export { Farcaster }
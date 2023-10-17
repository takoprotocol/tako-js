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
}

export { Farcaster }
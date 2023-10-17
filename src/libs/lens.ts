import * as CONSTANT from '../constant';
import { get, post } from '../utils/utils';
import { EcosystemP2p } from './ecosystem_p2p';
enum Api_Lens {

}

class Lens extends EcosystemP2p {
    constructor(network: CONSTANT.Network, url: string) {
        super(network, url, "lens");
        this._idsKeyName = "profileIds";
        this._idKeyName = "profileId";
    }
}

export { Lens }
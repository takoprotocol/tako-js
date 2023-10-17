import * as CONSTANT from '../constant';
import { EcosystemOpenCuration } from './ecosystem_open_curation';
import { get, post } from '../utils/utils';
enum Api_Lens_Open_Curation {

}
class LensOpenCuration extends EcosystemOpenCuration {
    constructor(network: CONSTANT.Network, url: string) {
        super(network, url, "lens/open_curation");
        this._idsKeyName = "profileIds";
        this._idKeyName = "profileId";
    }
}

export { LensOpenCuration }
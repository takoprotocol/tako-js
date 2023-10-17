import { EcosystemBasic } from './ecosystem';
import { get, post } from '../utils/utils';

class EcosystemP2p extends EcosystemBasic {
    public async bidsReceivedStats(ids: number[], includeIgnore: boolean) {
        if (ids.length != 0) {
            const url = `${this.url}${this.ecosystem}/${Apis.BidsReceivedStats}`;
            const reqBody = { includeIgnore: includeIgnore };
            reqBody[this._idsKeyName] = ids;
            return await post(url, reqBody);
        }
        return {}
    }
    public async bidsConfirmingReceived(ids: number[]) {
        if (ids.length != 0) {
            const url = `${this.url}${this.ecosystem}/${Apis.BidsConfirmingReceived}`;
            const reqBody = {};
            reqBody[this._idsKeyName] = ids;
            return await post(url, reqBody);
        }
        return {}
    }
}
enum Apis {
    BidsReceivedStats = 'get_bids_received/stats',
    BidsConfirmingReceived = 'get_bids_confirming_received',
}
export { EcosystemP2p }

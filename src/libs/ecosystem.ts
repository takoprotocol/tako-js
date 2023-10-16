import * as CONSTANT from '../constant';
import { get, post } from '../utils/utils';
import * as querystring from 'querystring';

class Ecosystem {
    private _network: CONSTANT.Network;
    private _url: string;
    private _ecosystemName: string;

    constructor(network: CONSTANT.Network, url: string, ecosystemName: string) {
        this._network = network;
        this._url = url;
        this._ecosystemName = ecosystemName;
    }
    private async fetchByIds(ids: number[], key: string, path: string) {
        if (ids.length != 0) {
            const url = `${this._url}${this._ecosystemName}/${path}`;
            const reqBody = {};
            reqBody[key] = ids;
            return await post(url, reqBody);
        }
        return {}
    }
    //protected
    protected async indexPairs(ids: number[], key: string) {
        return await this.fetchByIds(ids, key, Apis.IndexPairs);
    }
    protected async curatorLastBidPrice(ids: number[], key: string) {
        const res = await this.fetchByIds(ids, key, Apis.CuratorLastBidPrice);
        return res.data;
    }
    protected async curatorAccepted(id: number | undefined, cursor: number | undefined, key: string) {
        const data = {};
        if (id != undefined) {
            data[key] = id;
        }
        if (cursor != undefined) {
            data['cursor'] = cursor;
        }
        let params = querystring.stringify(data);
        if (params != "") {
            params = "?" + params;
        }
        const url = `${this._url}${this._ecosystemName}/${Apis.CuratorAccepted}${params}`;
        return await get(url);
    }
    //public
    public async recentCurators() {
        const url = `${this._url}${this._ecosystemName}/${Apis.RecentCurators}`;
        return await get(url);
    }

}
enum Apis {
    IndexPairs = 'id_index/pairs',
    RecentCurators = 'recent/curators',
    CuratorLastBidPrice = 'curator/last_bid_price',
    CuratorAccepted = 'curator/accepted',
}
export { Ecosystem }
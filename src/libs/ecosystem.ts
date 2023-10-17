import * as CONSTANT from '../constant';
import { get, post } from '../utils/utils';
import * as querystring from 'querystring';

class EcosystemBasic {
    private _network: CONSTANT.Network;
    private _url: string;
    private _ecosystem: string;
    protected _idsKeyName: string = '';
    protected _idKeyName: string = '';

    constructor(network: CONSTANT.Network, url: string, ecosystem: string) {
        this._network = network;
        this._url = url;
        this._ecosystem = ecosystem;

    }
    private async fetchByIds(ids: number[], key: string, path: string) {
        const _ids = ([] as number[]).concat(ids);
        if (_ids.length != 0) {
            const url = `${this._url}${this._ecosystem}/${path}`;
            const reqBody = {};
            reqBody[key] = _ids;
            return await post(url, reqBody);
        }
        return {}
    }

    //protected
    protected get url(): string {
        return this._url;
    }
    protected get ecosystem(): string {
        return this._ecosystem;
    }

    //public
    public async indexPairs(ids: number[]) {
        return await this.fetchByIds(ids, this._idsKeyName, Apis.IndexPairs);
    }
    public async curatorLastBidPrice(ids: number[]) {
        const res = await this.fetchByIds(ids, this._idsKeyName, Apis.CuratorLastBidPrice);
        return res.data;
    }
    public async recentCurators() {
        const url = `${this._url}${this._ecosystem}/${Apis.RecentCurators}`;
        return await get(url);
    }
    public async curatorAccepted(id: number | undefined, cursor: number | undefined) {
        const data = {};
        if (id != undefined) {
            data[this._idKeyName] = id;
        }
        if (cursor != undefined) {
            data['cursor'] = cursor;
        }
        let params = querystring.stringify(data);
        if (params != "") {
            params = "?" + params;
        }
        const url = `${this._url}${this._ecosystem}/${Apis.CuratorAccepted}${params}`;
        return await get(url);
    }
    public async bidsCreatedStats(ids: number[], addresses: string[]) {
        if (ids.length != 0 || addresses.length != 0) {
            const url = `${this._url}${this._ecosystem}/${Apis.BidsCreatedStats}`;
            const reqBody = { addresses: ([] as string[]).concat(addresses) };
            reqBody[this._idsKeyName] = ([] as number[]).concat(ids);
            return await post(url, reqBody);
        }
        return {}
    }
    public get bidsCreated(): BidsCreated {
        return new BidsCreated(this._url, this._ecosystem, this._idsKeyName);
    }
}
class BidsCreated {
    private _limit: number = 10;
    private _offset: number = 0;
    private _ids: number[] = [];
    private _addresses: string[] = [];
    private _url: string;
    private _ecosystem: string;
    private _idsKeyName: string;
    private _sortType: string = "desc";
    private _sort: string = "bid_amount";
    private _state: string = "";
    private _bidType: string[] = [];
    constructor(url: string, ecosystem: string, idsKeyName: string) {
        this._url = url;
        this._ecosystem = ecosystem;
        this._idsKeyName = idsKeyName;
    }

    public limit(limit: number): BidsCreated {
        this._limit = limit;
        return this;
    }
    public offset(offset: number): BidsCreated {
        this._offset = offset;
        return this;
    }
    public get DESC(): BidsCreated {
        this._sortType = "desc";
        return this;
    }
    public get ASC(): BidsCreated {
        this._sortType = "asc";
        return this;
    }
    public addresses(addresses: string[]): BidsCreated {
        this._addresses = ([] as string[]).concat(addresses);
        return this;
    }
    public ids(ids: number[]): BidsCreated {
        this._ids = ([] as number[]).concat(ids);
        return this;
    }
    public sort(sort: string): BidsCreated {
        this._sort = sort;
        return this;
    }
    public state(state: string): BidsCreated {
        this._state = state;
        return this;
    }
    public bidType(bidType: string[]): BidsCreated {
        this._bidType = ([] as string[]).concat(bidType);
        return this;
    }
    public async find() {
        if (this._ids.length != 0 || this._addresses.length != 0) {
            const url = `${this._url}${this._ecosystem}/${Apis.BidsCreated}`;
            const reqBody = {
                addresses: this._addresses, bidType: this._bidType,
                limit: this._limit, offset: this._offset,
                sort: this._sort, sortType: this._sortType,
                state: this._state
            };
            reqBody[this._idsKeyName] = this._ids;
            return await post(url, reqBody);
        }
        return {}
    }
    public async stats() {

    }
}
enum Apis {
    IndexPairs = 'id_index/pairs',
    RecentCurators = 'recent/curators',
    CuratorLastBidPrice = 'curator/last_bid_price',
    CuratorAccepted = 'curator/accepted',
    BidsCreatedStats = 'get_bids_created/stats',
    BidsCreated = 'get_bids_created',
}
export { EcosystemBasic }
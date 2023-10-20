import { utils } from '../utils';
import * as querystring from 'querystring';

class GetBids {
    protected _url: string;
    protected _ecosystem: string;
    protected _idsKeyName: string;
    protected _path: string;

    protected _limit: number = 10;
    protected _offset: number = 0;
    protected _ids: number[] = [];
    protected _sortType: string = "desc";
    protected _sort: string = "bid_amount";
    protected _bidType: string[] = [];
    constructor(url: string, ecosystem: string, idsKeyName: string, path: string) {
        this._url = url;
        this._ecosystem = ecosystem;
        this._idsKeyName = idsKeyName;
        this._path = path;
    }
    protected requestBody(): object {
        return {};
    }

    public limit(limit: number) {
        this._limit = limit;
        return this;
    }
    public offset(offset: number) {
        this._offset = offset;
        return this;
    }
    public get DESC() {
        this._sortType = "desc";
        return this;
    }
    public get ASC() {
        this._sortType = "asc";
        return this;
    }
    public ids(ids: number[]) {
        this._ids = ([] as number[]).concat(ids);
        return this;
    }
    public sort(sort: string) {
        this._sort = sort;
        return this;
    }
    public bidType(bidType: string[]) {
        this._bidType = ([] as string[]).concat(bidType);
        return this;
    }
    public async get() {
        const url = `${this._url}${this._ecosystem}/${this._path}`;
        const reqBody = this.requestBody();
        reqBody["bidType"] = this._bidType;
        reqBody["limit"] = this._limit;
        reqBody["offset"] = this._offset;
        reqBody["sort"] = this._sort;
        reqBody["sortType"] = this._sortType;
        reqBody[this._idsKeyName] = this._ids;
        return await utils.post(url, reqBody);
    }
}
class PassedBids {
    protected _url: string;
    protected _ecosystem: string;
    protected _path: string;

    protected _limit: number = 10;
    protected _offset: number = 0;
    constructor(url: string, ecosystem: string, path: string) {
        this._url = url;
        this._ecosystem = ecosystem;
        this._path = path;
    }
    public limit(limit: number) {
        this._limit = limit;
        return this;
    }
    public offset(offset: number) {
        this._offset = offset;
        return this;
    }
    public async get() {
        const url = `${this._url}${this._ecosystem}/${this._path}`;
        const data = {};
        data["limit"] = this._limit;
        data["offset"] = this._offset;
        let params = querystring.stringify(data);
        if (params != "") {
            params = "?" + params;
        }
        return await utils.get(url);
    }
}
export { GetBids, PassedBids }
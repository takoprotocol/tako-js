import { EcosystemBasic } from './ecosystem';
import { utils } from '../utils';

enum Apis {
    Register = 'register',
}
class EcosystemOpenCuration extends EcosystemBasic {
    public async register(index: number, pubId: string) {
        const url = `${this.url}${this.ecosystem}/${Apis.Register}`;
        const reqBody = { index: index, pubId: pubId };
        return await utils.post(url, reqBody);
    }
}

export { EcosystemOpenCuration }
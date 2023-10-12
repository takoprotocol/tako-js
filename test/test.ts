//import * as tt from './src';
import * as tt from '../build/src';
(async () => {
    const res = await tt.getTakoInfo();
    console.log(JSON.stringify(res));
    const addr = tt.generateAddress("0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    console.log(`addr:${addr}`);
})()
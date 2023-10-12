# tako-js
[![npm version](https://img.shields.io/badge/npm-1.0.7-brightgreen.svg)](https://www.npmjs.com/package/yarn-node-test)

tako nodejs library

## Install
```javascript
npm install --save yarn-node-test
```

## Usage
```javascript
import  *  as  tt  from  './src';

(async () => {
const res = await  tt.getTakoInfo();
console.log(JSON.stringify(res));
})()
```
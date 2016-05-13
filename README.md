## get the signature by params

## Installation

```bash
$ npm install getsignature
```

## example

```js
var getsignature = require('getsignature');
// 生成签名所用参数 （调用外部接口要发送的参数）
var params = { 'name':'abc','age':24,'sex':1 };
// 秘钥参数
var secretKey = 'abcdef';
// 获取签名参数
var signature = getsignature(params, secretKey);
console.log(signature); 
// '71A9D9D21A122E287DA3051A9573F313'
```

## License

  [MIT](LICENSE)

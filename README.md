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
#### 签名参数sign生成的方法
- 第1步: 将所有参数（注意是所有参数），除去sign本身，以及值是空的参数，按参数名字母升序排序。
- 第2步: 然后把排序后的参数按参数1值1参数2值2…参数n值n的方式拼接成一个字符串。
- 第3步: 在上一步得到的字符串前面加上验证密钥key(这里的密钥key是接口提供方分配给接口接入方的)
- 第4步: 计算第3步字符串的md5值(32位)，然后转成大写,得到的字符串作为sign的值。

## License

  [MIT](LICENSE)

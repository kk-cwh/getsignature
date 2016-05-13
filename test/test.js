var getsignature = require('../lib/index.js');
var params = { 'name':'abc','age':24,'sex':1 };
var secretKey = 'abcdef';
var signature = getsignature(params, secretKey);
console.log(signature); // '71A9D9D21A122E287DA3051A9573F313'
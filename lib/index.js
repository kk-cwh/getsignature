var crypto = require('crypto');
var util = require('util');

function getsignature(paramObject, secretKey) {
  if (util.isObject(paramObject) && !util.isArray(paramObject) && secretKey != '' && secretKey != null) {
    var tmp = []; //存放参数的键
    var str = '';
    for (var key in paramObject) {
      tmp.push(key);
    }
    // 键排序
    tmp.sort();
    // 拼接字符键+值+键+值
    for (var i = 0, len = tmp.length; i < len; i++) {
      str += (paramObject[tmp[i]] != null && paramObject[tmp[i]] != '') ? (tmp[i] + '' + paramObject[tmp[i]]) : '';
    }
    str = secretKey + str;
    str = crypto.createHash("md5").update(str, 'utf8').digest("hex");
    return str.toUpperCase();
  }
  return '';
}

module.exports = getsignature;

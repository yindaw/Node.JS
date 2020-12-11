//使用对称加密算法：aes 128
//128位的密钥
const secret = Buffer.from("luw28q0uehaecy1o");
const crypto = require("crypto");
//准备一个iv,随机向量
const iv = Buffer.from("z3rdsxu9t02o7zli");



exports.encrypt = function (str) {
    const cry = crypto.createCipheriv("aes-128-cbc", secret, iv);
    let result = cry.update(str, "utf-8", "hex");
    result += cry.final("hex");
    return result;
}



exports.decrypt = function (str) {
    const decry = crypto.createDecipheriv("aes-128-cbc", secret, iv);
    let result = decry.update(str, "hex", "utf-8");
    result += decry.final("utf-8");
    return result;
}

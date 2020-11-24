const { dir } = require("console");
const fs = require("fs");
const path = require("path");
const dirname = path.resolve(__dirname, "./myfiles/1");

async function exists (filename) {
    try {
        await fs.promises.stat(filename);
        return true;
    } catch (err) {
        if (err.code == "ENOENT") {
            //文件不存在
            return false;
        }
        throw err;
    }
}
async function test () {



// await fs.promises.mkdir(dirname);
// console.log("创建目录成功");

const result = await exists(dirname);
if (result) {
    console.log("目录已存在，无需操作");
} else {
    await fs.promises.mkdir(dirname);
}
}
test();
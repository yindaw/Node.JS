const fs = require("fs");
const path = require("path");
const filename = path.resolve(__dirname, "./myfiles/sub/2.txt");


async function test () {
    // await fs.promises.writeFile(filename, "asadadas", {
    //     flag: "a"//追加内容
    // });

    const buffer = Buffer.from("asadad", "utf-8");
    await fs.promises.writeFile(filename, buffer);
    console.log("写入成功");
}
test();
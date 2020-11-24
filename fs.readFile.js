const fs = require("fs");
const path = require("path");
const filename = path.resolve(__dirname, "./myfiles/1.txt");

// fs.readFile(filename, (err, content) => {
//     console.log(content.toString("utf-8"));
// });

// fs.readFile(filename, "utf-8", (err, content) => {
//     console.log(content);
// });

// fs.readFile(filename, {
//     encoding: "utf-8"
// }, (err, content) => {
//     console.log(content);
// });


//Sync函数时同步的，会导致JS运行阻塞，机器影响性能，通常在程序启动时运行有限的次数即可
// const content = fs.readFileSync(filename, "utf-8");
// console.log(content);



async function test () {
    const content = await fs.promises.readFile(filename, "utf-8");
    console.log(content);
}
test();
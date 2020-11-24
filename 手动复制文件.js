const fs = require("fs");
const path = require("path");
async function test () {
    const fromFilename = path.resolve(__dirname, "./myfiles/1.jpg");
    const buffer = await fs.promises.readFile(fromFilename);
    const toFilename = path.resolve(__dirname, "./myfiles/1.copy.jpg");
    await fs.promises.writeFile(toFilename, buffer);
    console.log("copy success!");
}
test();
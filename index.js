// require("./init");
const QRCode = require("qrcode");
QRCode.toFile("./code.png", "abc123", (err) => {
    if (err) {
        console.log(err);
    }
}) 
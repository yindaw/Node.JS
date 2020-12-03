const express = require("express");
const app = express(); //创建一个express应用


app.use(require("./staticMiddleware"));

app.get("/news/abc", (req, res, next) => {
    console.log("handler1");
    //throw new Error("abc");
    //相当于next(new Error("abc"))
    next(new Error("abc"));
    //next();
});


app.use("/news", require("./errorMiddleware"));
const port = 5008;
app.listen(port, () => {
    console.log(`server listen on ${port}`);
});
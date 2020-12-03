require("./init");
const express = require("express");
const app = express(); //创建一个express应用

app.get("/news/:id", (req, res) => {
    //req和res是被express封装过后的对象
    //获取请求信息
    console.log(req.headers["host"]); //获取请求头，对象
    console.log("请求路径", req.path);
    console.log("query", req.query);
    console.log("params", req.params);
    

    //响应
    // res.send({
    //     id: 123,
    //     name: "成哥",
    //     age: 18
    // });

    // res.setHeader("a", "123");
    // res.send([2, 3, 4]);
    //res.status(302).header("location", "https://www.baidu.com").end();
    //res.status(302).location("https://www.baidu.com").end();
    res.redirect(302, "https://www.baidu.com");
});

//匹配任何get请求
app.get("*", (req, res) => {
    console.log("abc");
});
const port = 5008;
app.listen(port, () => {
    console.log(`server listen on ${port}`);
});


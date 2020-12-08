const express = require("express");
const app = express(); 
//映射public目录中的静态资源
const path = require("path");
const staticRoot = path.resolve(__dirname, "../public");
app.use(express.static(staticRoot));
//解析application/x-www-form-urlencoded格式的请求体
app.use(express.urlencoded({
    extended: true
}));
//解析application/json格式的请求体
app.use(express.json());

//处理api的请求
app.use("/api/student", require("./api/student"));
// app.use("/api/book", require("./api/book"));
// app.use("/api/class", require("./api/class"));
app.use("/api/admin", require("./api/admin"));

 
//错误处理的中间件
app.use(require("./errorMiddleware"));
const port = 5008;
app.listen(port, () => {
    console.log(`server listen on ${port}`);
});
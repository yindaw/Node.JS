require("./models/relation");
// require("./spider/fetchBooks");

const adminServ = require("./services/adminService");    
// adminServ.login("bcd", "123").then(r => {
//     console.log(r);
// });

adminServ.getAdminById(3).then(r => {
    console.log(r);
})
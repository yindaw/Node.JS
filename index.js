const adminServ = require("./services/adminService");
// adminServ.addAdmin({
//     loginId: "abcsasasaas",
//     loginPwd: "asdfgsg"
// });


adminServ.deleteAdmin(4).then(r => {
    console.log(r);
});

// adminServ.updateAdmin(4, {
//     loginId: "aaaa",
// }).then(r => {
//     console.log(r);
// }); 
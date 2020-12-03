require("./init");
const stuServ = require("./services/studentService");
// stuServ.addStudent({
//     name: "sdasd",
//     birthday: "2010-3-5",
//     sex: true,
//     mobile: "18790119642",
//     ClassId: "3",
//     deletedAt: "2010-1-1",
//     a: 3,
//     b: 4
// }).catch((err) => {
//     console.log(err);
// });  


stuServ.getStudents().then((res) => {
    console.log(res);
})
 
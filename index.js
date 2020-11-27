// get the client
const mysql = require('mysql2/promise');
    const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: "123123",
    database: 'companydb',
    multipleStatements: true,
  });

async function test (id) {
  //create the connection to database
  const sql = `SELECT * FROM employee WHERE \`name\` LIKE CONCAT('%', ?, '%');`;
  const [results] =  await pool.execute(sql, [id]);
  console.log(results);
}
test("袁");
 
 


















// simple query
// connection.query("SELECT * FROM `company`;", function (err, results) {
//     //err错误
//     //results结果
//     console.log(results);// results contains rows returned by server
// });


 
// connection.query("INSERT INTO company(`name`, location, buildDate) VALUES('abbc', '阿斯顿', CURDATE());",
// (err, result) => {
//     console.log(result);
// });

// connection.query(
//     "UPDATE company SET `name`= 'bcd' WHERE id=4",
//     (err, result) => {
//         console.log(result);
//     }
// );


// // with placeholder
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );

// connection.query(
//     "DELETE FROM company WHERE id=4",
//     (err, result) => {
//         console.log(result);
//     }
// );

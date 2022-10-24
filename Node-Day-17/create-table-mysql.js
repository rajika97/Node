var mysql = require('mysql');

var connect = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Lpranjith123.',
  database: 'newTest',
});

var drop_T = 'DROP table details';
//establishing connection
connect.getConnection(function (err, connection) {
  //Drop the details table
  connection.query(drop_T, function (err, res) {
    if (err) throw err;
    else {
      console.log('The details table is removed successfully');
    }
  });

  //releasing connection
  connection.release();
});

// var table =
//   'CREATE TABLE details (id int(15) NOT NULL AUTO_INCREMENT,' +
//   'name varchar(30) DEFAULT NULL,' +
//   'age float(15) DEFAULT NULL,' +
//   'PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=latin1';

// //establishing connection
// connect.getConnection(function (err, connection) {
//   //Creating details table
//   if (err) throw err;
//   connection.query(table, function (err) {
//     if (err) throw err;
//     else {
//       console.log('Table created Successfully!');
//     }
//   });

//   //releasing connection
//   connection.release();
// });

//Import MySQL module
let mysql = require('mysql');

//create a connection object with user details
let connectionPool = mysql.createPool({
    connectionLimit: 1,
    host: "localhost",
    user: "root",
    password: "",
    database: "famchan",
    debug: false
});




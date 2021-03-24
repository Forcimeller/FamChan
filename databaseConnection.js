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

function insert(){
    //Build SQL Query
    let sql = "INSERT INTO user (FirstName, LastName, Password, DateOfBirth, EmailAddress, Occupation, UserImage)" +
                "VALUES ('Jason', 'Adoteye', '123456789', 25-02-2000, 'Jason2@blob.com', 'Student', '')";

    //Execute the query and output the results
    connectionPool.query(sql, (err, result) => {

        if (err){
            console.error("Error executing query: " + JSON.stringify(err)); //check for errors
        }else{
            console.log(JSON.stringify(result));
        }
    });
}

function select(){
    //Build SQL Query
    let sql = "SELECT * FROM user";

    //Execute the query and output the results
    connectionPool.query(sql, (err, result) => {
        if (err){
            console.error("Error executing query: " + JSON.stringify(err)); //check for errors
        }else{
            console.log(JSON.stringify(result));
        }
    });
}

function update(){
    //Build SQL Query
    let sql = "UPDATE user SET EmailAddress='krushems@blob.com' WHERE EmailAddress='Jason2@blob.com'";

    //Execute the query and output the results
    connectionPool.query(sql, (err, result) => {
        if (err){
            console.error("Error executing query: " + JSON.stringify(err)); //check for errors
        }else{
            console.log(JSON.stringify(result));
        }
        closeConnection();
    });
}

function closeConnection(){
        //Close the connection
        connectionPool.end();
}

//insert();
//select();
update();
//closeConnection();
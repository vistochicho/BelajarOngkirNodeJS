let mysql = require('mysql');

let connection = mysql.createConnection({
    host:       'localhost',
    user:       'root',
    password:   '',
    database:   'posts'
})

connection.connect(function(error){
    if (!!error) {
        console.log(error)
    } else {
        console.log("Successfully Connected to Database!");
    }
})

module.exports = connection;
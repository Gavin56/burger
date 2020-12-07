var mysql = require("mysql");

// let connection = mysql.createConnection({
//     host: "localhost",
//     port: 8080,
//     user: "root",
//     password: "password",
//     database: "burgers_db"
// });

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burgers_db"
    });
};

connection.connect(function (err) {
    if (err) {
        console.error("Error connection: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
});

module.exports = connection; 
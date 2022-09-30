const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password 
    password: 'jfuai9-iqyxP-prbTy',
    database: 'election'
});

module.exports = db;
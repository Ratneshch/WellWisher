const mysql = require('mysql2/promise'); // ⚡ Use promise wrapper

// Use createPool for better connection handling
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'well_wisher_cars',
    port: 4306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

console.log("Connected to db");

module.exports = db;

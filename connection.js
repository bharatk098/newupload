const mysql = require('mysql2');

// Create a connection pool
const conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodeapp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


module.exports = conn;

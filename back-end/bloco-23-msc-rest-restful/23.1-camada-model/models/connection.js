const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'emma0801',
  database: 'exercicios_23_1',
  port: '3306',
});

module.exports = connection;
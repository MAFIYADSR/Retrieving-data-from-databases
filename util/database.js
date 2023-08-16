const mysql = require('mysql2');

const pool = mysql.createPool({
   host: 'local',
   user: 'root',
   database: 'node-details', 
   passoword: '1234567890'

});

module.exports = pool.promise();
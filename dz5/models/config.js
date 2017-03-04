const mysql= require('mysql');
const connection = mysql.createPool({
    host:'localhost',
    database:'tasks',
    port:'3306',
    user:'root',
    password:'root'
});

module.exports = connection;
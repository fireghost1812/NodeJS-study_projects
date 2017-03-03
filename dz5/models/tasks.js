const mysql=require('mysql');
const connection=mysql.createPool({
    host:'localhost',
    database:'tasks',
    user:'root',
    password:'root'
});

pool.getConnection(function(err,connection){
    connection.release();
});

const Tasks = {
    list: function(callback){
        pool.getConnection(function(err,connection){
            if(err) return callback(err);
            connection.query('SELECT * FROM tasks WHERE 1',function(err,rows){
                if(err) return callback(err);

                callback(null,rows);

                connection.release();
            });
        });
    },
    add:function(tasks,callback){
        //TO DO
    },
    change: function(id, text, callback) {
        // TODO
    },
    complete: function(id, callback) {
        // TODO
    },
    delete: function(id, callback) {
        // TODO
  }
};
module.exports = Tasks;


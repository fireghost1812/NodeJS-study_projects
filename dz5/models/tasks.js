const connection = require('./config');

const Tasks = {
    list: function(tasks){
       return new Promise((resolve,reject)=>{
       pool.getConnection(function(err,connection){
            if(err) return reject(err);
            connection.query(`'SELECT * FROM ${tasks}, WHERE ${tasks}'`,function(err,rows){
                if(err) return reject(err);

                resolve(rows);

                connection.release();
            });
        });
       });
    },
    add:function(tasks){
        //TO DO
        return new Promise((resolve,reject)=>{
        pool.getConnection(function(err,connection){
            if(err) return reject(err);
            connection.query(`SELECT * FROM tasks WHERE 1`,function(err,rows){
                if(err) return reject(err);

                resolve(rows);

                connection.release();
            });
        });
       });
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


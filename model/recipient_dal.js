var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('SELECT * FROM recipient;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}

exports.Insert = function(fname, lname, email, password, callback) {
    var values = [fname, lname, email, password];
    connection.query('INSERT INTO recipient (fname, lname, email, password) VALUES (?, ?, ?, ?)', values,
        function(err, result){
        callback(err, result);
    });
}
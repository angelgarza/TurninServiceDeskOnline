var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('SELECT * FROM sender;',
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



exports.GetByID = function(sender_id, callback) {

    console.log(sender_id);
    var query = 'SELECT * FROM sender_info WHERE sender_id=' + sender_id;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
};

exports.Insert = function(email, fname, lname, callback) {
    var values = [email, fname, lname];
    connection.query('INSERT INTO sender (email, fname, lname) VALUES (?, ?, ?)', values,
        function(err, result){
        callback(err, result);
    });
}
var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.GetByID = function(tracking_num, callback) {
    console.log(tracking_num);
    var query = 'SELECT * FROM track_your_package WHERE tracking_num=' + tracking_num;
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

exports.Insert = function(recipient_id, tracking_num, speed, package_type, callback) {
    var query = "INSERT INTO track_your_package (recipient_id, tracking_num, speed, package_type) VALUES (?, ?, ?, ?)";
    connection.query(query, [recipient_id, tracking_num, speed, package_type], function(err, result){
        callback(err, result);
    });
}
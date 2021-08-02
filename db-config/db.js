var sqlDB = require('mssql');
var settings = require('../setting');

var executeSql = function(sql,callback){
    var conn = new sqlDB.ConnectionPool(settings.config);
    conn.connect()
    .then(function(){
        var req = new sqlDB.Request(conn);
        req.query(sql)
        .then(function(data){
            callback(data);
        })
        .catch(function(err){
            //console.log(err);
            callback(null,err);
        })
    })
    .catch(function(err){
        //console.log(err);
        callback(null,err);
    })
}

module.exports = {
    executeSql
}
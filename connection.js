var mysql = require('mysql');
var config = require('./config');
function Connecton(){
    this.pool = null;
    this.init = function(){
        this.pool = mysql.createPool({
            connectionLimit:10,
            host:config.host,
            user: config.user,
            password: config.secret,
            database: config.database
        });
    };
    this.acquire = function(callback) {
        this.pool.getConnection(function(err , connecton){
            callback(err , connecton);
        });
    };
}
module.exports = new Connecton();
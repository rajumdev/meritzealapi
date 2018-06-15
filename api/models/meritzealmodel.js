

var connection = require('../../connection');
function authmodels(){
    this.getemails = function(locdata , callback){
 
        console.log(locdata);
        var location = '%'+locdata+"%";
        console.log(location);
        connection.acquire(function(err , con){
            console.log(err);
            con.query('select * from email_db where location like ?', location,function(err ,res){
                con.release();
                console.log(res);
                callback(err,res);
            });
        });
    };

}
module.exports = new authmodels();
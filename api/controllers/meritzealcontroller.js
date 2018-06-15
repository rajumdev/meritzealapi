var authModels = require('../models/meritzealmodel');
var authcntrl = authcntrl || {};
function authcntrl(type){
    this.type = type;
    this.version = {};
}         
authcntrl.prototype.getemails = function(location,callback){
    authModels.getemails(location,function(err, registeruser){
    console.log(registeruser);
    callback(err , registeruser);    
    });
};
module.exports = authcntrl;
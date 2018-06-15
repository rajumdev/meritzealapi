var authcntrl = require('../controllers/meritzealcontroller');
var authRoute = function(app){
    var authCntrl = new authcntrl();
    app.get('/getemails/', function(req, res){
        authCntrl.getemails(req.query.location,function(err , result){

            console.log(result);
            res.send(result);
        })
      
    });
};
module.exports = authRoute;
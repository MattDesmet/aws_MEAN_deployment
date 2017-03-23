var session = require('./../controllers/loginBackendController.js')
// console.log(session);
module.exports = function(app){
  // console.log(app);
  app.post('/login', function(request,response){
    session.login(request,response)
    })
    app.get('/checkuser', function(request, response) {
      session.checkUser(request, response);
    })
    app.get('/logout', function(request, response){
      session.logout(request, response)
    })
}

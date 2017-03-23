app.factory('loginFactory',function($http, $location){
  var factory = {};
  factory.login = function(user){
    $http.post('/login', user).then(function(output){
        if(output.data){
          // console.log("user is logged in")
          $location.url('/dash')
        }
      })
  }
  factory.checkUser = function(callback){ // NEWLY created callback function.
    $http.get('/checkuser').then(function(output){
        if(!output.data){
          $location.url('/login')
        }
        else{
          callback(output.data)
        }
      })
  }
  return factory
})

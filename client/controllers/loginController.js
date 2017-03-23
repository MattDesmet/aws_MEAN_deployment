app.controller('loginController',function($scope, loginFactory){
  $scope.errors = [];

  loginFactory.checkUser(function(data){
    $scope.curUser = data;
    console.log('this is curUser value: ', data); //remove in production
  })

  $scope.login = function(){
    $scope.errors = []
    if(!$scope.logReg || !$scope.logReg.name){
      $scope.errors.push("Please enter name")
    }
    else if($scope.logReg.name.length < 3){
      $scope.errors.push("name needs to be longer than 3 characters")
    }
    else{
      loginFactory.login($scope.logReg);
    }
  }
})

// console.log("controller is working");

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
$routeProvider
  .when('/login',{
    templateUrl: 'partials/login.html'
    })
  .when('/dash',{
    templateUrl: 'partials/dash.html'
    })
  .otherwise({
    redirectTo: '/login'
    })
})

// console.log("app.js is working");

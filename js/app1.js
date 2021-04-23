var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'page/home.html'
	})
	.when('/about',{
		templateUrl:'page/about.html'
	});
});
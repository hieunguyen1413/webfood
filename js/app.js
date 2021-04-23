var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:"page/home.html",
		controller:'a'
	})
	.when('/about',{
		templateUrl:"page/about.html",
		controller:'b'
	})
	.when('/content',{
		templateUrl:"page/content.html",
		controller:'c'
	});
});

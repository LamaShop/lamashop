
var myApp = angular.module('myApp',['ui.router']);

myApp.config(function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.when("","/home");

	$stateProvider
	
	.state("home",{
		url:"home",
		templateUrl:"components/home/home.html",
	})
	.state("market",{
		url:"market",
		templateUrl:"components/market/market.html",
	})
	.state("car",{
		url:"car",
		templateUrl:"components/car/car.html",
	})
	.state("mine",{
		url:"mine",
		templateUrl:"components/mine/mine.html",
	})
	
})
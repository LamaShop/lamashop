
var myApp = angular.module('myApp',['ui.router','angularCSS','HomeModule','MarketModule','CarModule','mineModule']);

myApp.config(function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.when("","/home");

	$stateProvider
	.state("home",{
		url:"home",
		templateUrl:"components/home/home.html",
		controller:'homeCtrl',
		css:"components/home/home.css"
	})
	.state("market",{
		url:"market",
		templateUrl:"components/market/market.html",
		controller:'marketCtrl',
		css:"components/market/market.css"
	})
	.state("car",{
		url:"car",
		templateUrl:"components/car/car.html",
		controller:'carCtrl',
		css:"components/car/car.css"
	})
	.state("mine",{
		url:"mine",
		templateUrl:"components/mine/mine.html",
		controller:'mineCtrl',
		css:"components/mine/mine.css"
	})
	
})
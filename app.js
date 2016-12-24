
var myApp = angular.module('myApp',['ui.router','angularCSS','HomeModule','MarketModule','CarModule','mineModule','wylpModule','anessaModule','kingwifeModule']);

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
	.state("market.wylp", {
		url:"/wylp",
		templateUrl: "components/market/wylp/wylp.html",
		controller:'wylpCtrl',
		css:'components/market/wylp/wylp.css'
	})
	.state("market.anessa", {
		url:"/anessa",
		templateUrl: "components/market/anessa/anessa.html",
		controller:'anessaCtrl',
		css:'components/market/anessa/anessa.css'
	})
	.state("market.kzl", {
		url:"/kzl",
		templateUrl: "components/market/kzl/kzl.html",
		// controller:'anessaCtrl',
		css:'components/market/kzl/kzl.css'
	})
	.state("market.kingwife", {
		url:"/kingwife",
		templateUrl: "components/market/kingwife/kingwife.html",
		controller:'kingwifeCtrl',
		css:'components/market/kingwife/kingwife.css'
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
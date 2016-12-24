
var myApp = angular.module('myApp',['ui.router','angularCSS','HomeModule','MarketModule','CarModule','mineModule','BaoshuiModule','HufuModule','JapanModule','NaiModule','YimajingModule','wylpModule','anessaModule','kingwifeModule']);

myApp.config(function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.when("","/home");

	$stateProvider
	.state("home",{
		url:"home",
		templateUrl:"components/home/home.html",
		controller:'homeCtrl',
		css:"components/home/home.css"
	})
		.state("home.baoshui",{
			url:"baoshui",
			templateUrl:"components/home/baoshui/baoshui.html",
			controller:'baoshuiCtrl',
			css:"components/home/baoshui/baoshui.css"
		})
		.state("home.hufu",{
			url:"hufu",
			templateUrl:"components/home/hufu/hufu.html",
			controller:'hufuCtrl',
			css:"components/home/hufu/hufu.css"
		})
		.state("home.japan",{
			url:"japan",
			templateUrl:"components/home/japan/japan.html",
			controller:'japanCtrl',
			css:"components/home/japan/japan.css"
		})
		.state("home.nai",{
			url:"nai",
			templateUrl:"components/home/nai/nai.html",
			controller:'naiCtrl',
			css:"components/home/nai/nai.css"
		})
		.state("home.yimajing",{
			url:"yimajing",
			templateUrl:"components/home/yimajing/yimajing.html",
			controller:'yimajingCtrl',
			css:"components/home/yimajing/yimajing.css"
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
		controller:'anessaCtrl',
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
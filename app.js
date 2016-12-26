
var myApp = angular.module('myApp',['ui.router','angularCSS','HomeModule','MarketModule','CarModule','mineModule','BaoshuiModule','HufuModule','JapanModule','NaiModule','YimajingModule','wylpModule','anessaModule','kingwifeModule','sanaModule','aiuModule','dumexModule','rkModule','orderModule','ChanceModule','SoldModule','collectModule','addressModule','couponModule','SearchModule']);




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
		.state("home.chance",{
			url:"chance",
			templateUrl:"components/home/chance/chance.html",
			controller:'chanceCtrl',
			css:"components/home/chance/chance.css"
		})
		.state("home.sold",{
			url:"sold",
			templateUrl:"components/home/sold/sold.html",
			controller:'soldCtrl',
			css:"components/home/sold/sold.css"
		})
		.state("home.search",{
			url:"search",
			templateUrl:"components/home/search/search.html",
			controller:'searchCtrl',
			css:"components/home/search/search.css"
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
    .state("market.sana", {
        url:"/sana",
        templateUrl: "components/market/sana/sana.html",
        controller:'sanaCtrl',
        css:'components/market/sana/sana.css'
    })
    .state("market.aiu", {
        url:"/aiu",
        templateUrl: "components/market/aiu/aiu.html",
        controller:'aiuCtrl',
        css:'components/market/aiu/aiu.css'
    })
    .state("market.jmj", {
        url:"/jmj",
        templateUrl: "components/market/jmj/jmj.html",
        // controller:'aiuCtrl',
        css:'components/market/jmj/jmj.css'
    })
    .state("market.goatSoap", {
        url:"/goatSoap",
        templateUrl: "components/market/goatSoap/goatSoap.html",
        // controller:'aiuCtrl',
        css:'components/market/goatSoap/goatSoap.css'
    })
    .state("market.cloud", {
        url:"/cloud",
        templateUrl: "components/market/cloud/cloud.html",
        // controller:'aiuCtrl',
        css:'components/market/cloud/cloud.css'
    })
    .state("market.dumex", {
        url:"/dumex",
        templateUrl: "components/market/dumex/dumex.html",
        controller:'dumexCtrl',
        css:'components/market/dumex/dumex.css'
    })
    .state("market.devondale", {
        url:"/devondale",
        templateUrl: "components/market/devondale/devondale.html",
        // controller:'dumexCtrl',
        css:'components/market/devondale/devondale.css'
    })
    .state("market.bilo", {
        url:"/bilo",
        templateUrl: "components/market/bilo/bilo.html",
        // controller:'dumexCtrl',
        css:'components/market/bilo/bilo.css'
    })
    .state("market.adl", {
        url:"/adl",
        templateUrl: "components/market/adl/adl.html",
        // controller:'dumexCtrl',
        css:'components/market/adl/adl.css'
    })
    .state("market.mkq", {
        url:"/mkq",
        templateUrl: "components/market/mkq/mkq.html",
        // controller:'dumexCtrl',
        css:'components/market/mkq/mkq.css'
    })
    .state("market.rk", {
        url:"/rk",
        templateUrl: "components/market/rk/rk.html",
        controller:'rkCtrl',
        css:'components/market/rk/rk.css'
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

		.state("mine.order",{
			url:"/order",
			templateUrl:"components/mine/order/order.html",
			controller:'orderCtrl',
			css:"components/mine/order/order.css"
		})


		.state('mine.collect',{
			url:'/collect',
			templateUrl:"components/mine/collect/collect.html",
			controller:'collectCtrl',
			css:"components/mine/collect/collect.css"
		})
		.state('mine.address',{
			url:'/address',
			templateUrl:'components/mine/address/address.html',
			controller:'addressCtrl',
			css:'components/mine/address/address.css'
		})
		.state('mine.coupon',{
			url:'/coupon',
			templateUrl:'components/mine/coupon/coupon.html',
			controller:'couponCtrl',
			css:'components/mine/coupon/coupon.css'
		})

})
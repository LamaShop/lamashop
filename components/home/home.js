angular.module('HomeModule',[])

	.service('dataService10',['$http',function($http){
		return $http.get('json/mySwp.json');
	}])
	.service('dataService11',['$http',function($http){
		return $http.get('json/home.json');
	}])
	.service('dataService12',['$http',function($http){
		return $http.get('json/home1.json');
	}])
    .service('dataService13',['$http',function($http){
        return $http.get('json/home2.json');
    }])
	.controller('homeCtrl',['$scope','dataService10','dataService11','dataService12','dataService13',function($scope,dataService10,dataService11,dataService12,dataService13){
		dataService10.success(function(res){
			//轮播图数据
			$scope.arr = res.list;
				console.log(res);
			//轮播图
			mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop:true,
			    autoplay:2000,
			    pagination: '.swiper-pagination',
			   	autoplayDisableOnInteraction:false,
			   	paginationClickable: true,
				longSwipesRatio: 0.3,
				touchRatio:1,
			   	observer:true,//修改swiper自己或子元素时，自动初始化swiper
				observeParents:true,//修改swiper的父元素时，自动初始化swiper
			    // 如果需要前进后退按钮
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev',
			  })
		})

			//四张展示图
			dataService11.success(function(res){
				$scope.arr1 = res.data.list;
				//console.log(res.data.list[0].banner);
			})
			//SANA品牌专场
			dataService12.success(function(res){
				$scope.arr3 = res.data.list;

			})
            //今日爆款
            dataService13.success(function(res){
                $scope.arr4 = res.data;

            })
			$scope.press = function(index){

			}





	}])


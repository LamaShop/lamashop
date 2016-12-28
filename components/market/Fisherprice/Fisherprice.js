angular.module('FisherpriceModule',[])
    .service('dataServiceFisherprice',['$http',function($http){
        return $http.get('json/Fisherprice.json');
    }])
    .controller('FisherpriceCtrl',['$scope','$rootScope','dataServiceFisherprice',function($scope,$rootScope,dataServiceFisherprice){
        dataServiceFisherprice.success(function(res){
            // console.log(res.data.list)
            $scope.arr=res.data.list;
            $scope.sendObj=function(obj){
                $rootScope.obj=obj;
                console.log($rootScope.obj);
            }
        })
    }])

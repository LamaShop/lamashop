angular.module('gncModule',[])
    .service('dataServiceGnc',['$http',function($http){
        return $http.get('json/gnc.json');
    }])
    .controller('gncCtrl',['$scope','$rootScope','dataServiceGnc',function($scope,$rootScope,dataServiceGnc){
        dataServiceGnc.success(function(res){
            // console.log(res.data.list)
            $scope.arr=res.data.list;
            $scope.sendObj=function(obj){
                $rootScope.obj=obj;
                console.log($rootScope.obj);
            }
        })
    }])


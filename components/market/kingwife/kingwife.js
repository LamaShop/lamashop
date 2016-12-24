angular.module('kingwifeModule',[])
    .service('dataService3',['$http',function($http){
        return $http.get('json/kingwife.json');
    }])
    .controller('kingwifeCtrl',['$scope','dataService3',function($scope,dataService3){
        dataService3.success(function(res){
            // console.log(res.data.list)
            $scope.arr=res.data.list;
        })
    }])

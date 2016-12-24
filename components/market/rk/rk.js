angular.module('rkModule',[])
    .service('dataService7',['$http',function($http){
        return $http.get('json/rikang.json');
    }])
    .controller('rkCtrl',['$scope','dataService7',function($scope,dataService7){
        dataService7.success(function(res){
            // console.log(res.data.list)
            $scope.arr=res.data.list;
        })
    }])


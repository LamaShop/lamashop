angular.module('sanaModule',[])
    .service('dataService4',['$http',function($http){
        return $http.get('json/sana.json');
    }])
    .controller('sanaCtrl',['$scope','dataService4',function($scope,dataService4){
        dataService4.success(function(res){
            // console.log(res.data.list)
            $scope.arr=res.data.list;
        })
    }])
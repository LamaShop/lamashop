/**
 * Created by YZTC on 2016/12/24.
 */
angular.module('SoldModule',[])

    .service('dataServiceF',['$http',function($http){
        return $http.get('json/sold.json');
    }])
    .controller('soldCtrl',['$scope','dataServiceF',function($scope,dataServiceF){
        dataServiceF.success(function(res){
            $scope.arr = res.data.list;
            console.log(res);
        })

    }])
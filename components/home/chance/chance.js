/**
 * Created by YZTC on 2016/12/24.
 */
angular.module('ChanceModule',[])

    .service('dataServiceE',['$http',function($http){
        return $http.get('json/chance.json');
    }])
    .controller('chanceCtrl',['$scope','dataServiceE',function($scope,dataServiceE){
        dataServiceE.success(function(res){
            $scope.arr = res.data.list;
            console.log(res);

        })
    }])

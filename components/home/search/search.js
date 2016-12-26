/**
 * Created by YZTC on 2016/12/25.
 */
angular.module('SearchModule',[])

    .service('dataServiceG',['$http',function($http){
        return $http.get('json/sold.json');
    }])
    .controller('searchCtrl',['$scope','dataServiceG',function($scope,dataServiceG){
        dataServiceG.success(function(res){
            $scope.arr = res.data.list;
            console.log(res);
        })

    }])
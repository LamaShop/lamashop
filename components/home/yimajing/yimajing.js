/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('YimajingModule',[])

    .service('dataService6',['$http',function($http){
        return $http.get('json/mySwp.json');
    }])
    .controller('yimajingCtrl',['$scope','dataService6',function($scope,dataService6){

    }])
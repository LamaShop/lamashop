/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('JapanModule',[])

    .service('dataService4',['$http',function($http){
        return $http.get('json/mySwp.json');
    }])
    .controller('japanCtrl',['$scope','dataService4',function($scope,dataService4){

    }])
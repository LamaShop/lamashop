/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('NaiModule',[])

    .service('dataService5',['$http',function($http){
        return $http.get('json/mySwp.json');
    }])
    .controller('naiCtrl',['$scope','dataService5',function($scope,dataService5){

    }])
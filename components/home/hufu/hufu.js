/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('HufuModule',[])

    .service('dataService3',['$http',function($http){
        return $http.get('json/mySwp.json');
    }])
    .controller('hufuCtrl',['$scope','dataService3',function($scope,dataService3){

    }])
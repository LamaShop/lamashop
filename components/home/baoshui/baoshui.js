/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('BaoshuiModule',[])

    .service('dataService2',['$http',function($http){
        return $http.get('json/mySwp.json');
    }])
    .controller('baoshuiCtrl',['$scope','dataService2',function($scope,dataService2){

    }])
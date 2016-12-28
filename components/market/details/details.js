angular.module('detailsModule',[])
    .controller('detailsCtrl',['$scope','$rootScope',function($scope,$rootScope){
       $scope.obj=$rootScope.obj;
    }])

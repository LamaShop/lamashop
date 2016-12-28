angular.module('addressModule',[])
    .controller('addressCtrl',['$scope',function ($scope) {
        $scope.isTrue1=true;
        $scope.move=function () {
            $scope.isTrue1=!$scope.isTrue1;
        }
        $("#city").citySelect({
            prov: "北京",
            city: "北京市",
            dist: "东城区",
            // nodata: "none"
        });
    }])

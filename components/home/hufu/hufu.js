/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('HufuModule',[])

    .service('dataService30',['$http',function($http){
        return $http.get('json/skin.json');
    }])
    .service('dataService31',['$http',function($http){
        return $http.get('json/jsonchoose4.json');
    }])
    .controller('hufuCtrl',['$scope','dataService30','dataService31',function($scope,dataService30,dataService31){
        dataService30.success(function(res){
            $scope.arr = res.data.special;
            console.log(res);
            $scope.arr1 = res.data.goods;
        })


        $scope.orderType = '';
        $scope.changeOrderType = function(type){
            $scope.orderType = type;
        }

        $scope.arrShow = [];
        $scope.text =false;
        dataService31.success(function(res){
            $scope.arr2 = res.data.attr;
            $scope.arr3 = res.data.attr[0].list;
            $scope.getText = function(i,obj){
                console.log(i);
                console.log(obj);
                $scope.isShow = true;
                $scope.arr3 = [];
                $scope.arr3 = res.data.attr[i].list;
                $scope.text =true;

            }


            //点击筛选,触发事件
            $scope.presss = function(){
                $scope.isShow = true;
            }
            //点击遮罩层,遮罩层消失;
            $scope.getHide = function(){
                $scope.isShow = false;
            }

            $scope.arr4 ="";
            $scope.pressImg = function(j){

                $scope.num = j;
                $scope.arr4 = [];
                $scope.arr4 = res.data.attr[0].list[j].text;

            }
            //重置按钮
            $scope.oneMore = function(){
                $scope.isShow = false;
                $scope.pressWord=false;
                $scope.arr4 = "";
            }
            $scope.aShow = true;
            $scope.bShow = false;
            $scope.show = function(){
                $scope.aShow = !$scope.aShow;
                $scope.bShow = !$scope.bShow;
            }
        })

    }])
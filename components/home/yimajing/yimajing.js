/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('YimajingModule',[])

    .service('dataServiceB',['$http',function($http){
        return $http.get('json/red.json');
    }])
    .service('dataServiceB1',['$http',function($http){
        return $http.get('json/jsonChoose2.json');
    }])
    .controller('yimajingCtrl',['$scope','dataServiceB','dataServiceB1',function($scope,dataServiceB,dataServiceB1){
        dataServiceB.success(function(res){
            $scope.arr = res.data.special;
            $scope.arr1 = res.data.goods;
          //  console.log($scope.arr1);
        })
        $scope.orderType = '';
        $scope.changeOrderType = function(type){
            $scope.orderType = type;
        }

        $scope.arrShow = [];
        $scope.text =false;
        dataServiceB1.success(function(res){
            $scope.arr2 = res.data.attr;
            $scope.arr3 = res.data.attr[0].list;
            $scope.getText = function(i,obj){
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
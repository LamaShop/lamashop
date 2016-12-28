angular.module('detailsModule',[])
    .controller('detailsCtrl',['$scope','$rootScope',function($scope,$rootScope){
        $scope.obj=$rootScope.obj;
        $scope.isShow1=false;
        $scope.isShow2=false;
        // $rootScope.goodsArr=[];
        // $rootScope.addGoods=function(good){
        //     $rootScope.good=good;
        //     $rootScope.goodsArr.push($rootScope.good);
        //     console.log($rootScope.goodsArr);
        // }
        // localStorage.removeItem('buyCar')
        var arrLocalStorage = [];
        var sum=0
        $scope.addGoods=function (good) {
            $scope.goodArr=good;
            var arrTemp = JSON.parse(localStorage.getItem('buyCar'));

            if(arrTemp){
                var number = 0;
                for(var k = 0;k<arrTemp.length;k++){
                    if(arrTemp[k].obj.goods_name == $scope.goodArr.goods_name){
                        arrTemp[k].count++;
                        var sum=JSON.parse(localStorage.getItem('sum'));
                        sum=sum++;
                        localStorage.setItem('sum',sum);
                        localStorage.setItem('buyCar',JSON.stringify(arrTemp));
                        number = 1;
                        break;
                    }
                }
                if(number == 0){
                    arrTemp.push({'count':1,'obj':$scope.goodArr});
                }

                localStorage.setItem('buyCar',JSON.stringify(arrTemp));
            }else {
                arrLocalStorage.push({'count':1,'obj':$scope.goodArr});
                localStorage.setItem('buyCar',JSON.stringify(arrLocalStorage));
            }
        }

    }])

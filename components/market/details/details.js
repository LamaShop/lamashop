angular.module('detailsModule',[])
    .controller('detailsCtrl',['$scope','$rootScope',function($scope,$rootScope){
        $scope.obj=$rootScope.obj;
        $scope.isShow1=false;
        $scope.isShow2=false;
        var select=document.getElementById('sel');
        // select.selectedIndex=3;
        var num=1;
        select.onchange=function(){
            num=select.options[select.selectedIndex].text/1;
            console.log(num);
        }
        var arrLocalstorage = [];
        // localStorage.clear();
        $scope.add=function(obj){
            var arrTemp = JSON.parse(localStorage.getItem('buyCar'));
            //如果此判断数组不为空,说明本地数据已经有东西存进来了
            if(arrTemp){
                //声明一个标识变量
                var number = 0;
                //对判断数组进行循环
                for(var k = 0;k<arrTemp.length;k++){
                    //若新添加的商品信息和判断数组里的东西能匹配得上,说明之前已添加过该商品到购物车
                    if(arrTemp[k].obj.goods_name == obj.goods_name){
//						alert('ss');
                        //相应的迭加该商品数量
                        arrTemp[k].count+=num;
                        //把改变之后的判断数组存到本地去
                        localStorage.setItem('buyCar',JSON.stringify(arrTemp));
                        //对标识变量赋值为1,然后跳出循环
                        number = 1;
                        break;
                    }
                }
                //此情况表明新添加的商品信息和判断数组里的东西没有匹配上,说明此商品之前未添加过,则直接添加到判断数组
                if(number == 0){
                    arrTemp.push({'count':num,'obj':obj});
                }
                //把改变之后的判断数组存到本地去
                localStorage.setItem('buyCar',JSON.stringify(arrTemp));
                //此情况表示之前的本地数据为空,是初次添加商品,则直接存到本地去
            }else {
                arrLocalstorage.push({'count':num,'obj':obj});
                localStorage.setItem('buyCar',JSON.stringify(arrLocalstorage));
            }
        }
    }])

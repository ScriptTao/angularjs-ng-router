/**
 * Created by 脚本 on 2019/1/22.
 */
monitor.controller('loginCtrl', function ($scope, $state, $stateParams, ngDialog, $interval, $timeout,SendHmiParam
    , locals) {
    /*----------------------------------初始化参数-------------------------------------*/
    $scope.param = {
        userName: "",
        userNameFlag: false,
        passWord: "",
        passWordFlag: false,
    }
    /*----------------------------------方法-------------------------------------------*/
    document.onkeydown = function (e) {
        var a = e || window.event;
        if (a.keyCode == 13) {
            $scope.goLogin();
        }
    }

    $scope.goLogin = function () {
        if ($scope.param.userName == "") {
            $scope.param.userNameFlag = true;
            return
        } else {
            $scope.param.userNameFlag = false;
        }
        ;
        if ($scope.param.passWord == "") {
            $scope.param.passWordFlag = true;
            return
        } else {
            $scope.param.passWordFlag = false;
        }
        $.ajax({
            url: "user_menu.json",
            type: "GET",
            dataType: "json",
            success: function (data) {
                for(var i = 0; i <data.length; i++){
                    if(data[i].account == $scope.param.userName && data[i].password == $scope.param.passWord){
                        localStorage.setItem("userInfo",JSON.stringify(data[i]));
                        alert("登录成功")
                        /*登录成功维护变量集合*/
                        SendHmiParam.save({
                            tag_list: PCDPTAGS
                        }, function (res) {
                            console.log(res)
                        })
                        $state.go("monitor-web.main")
                        break
                    }
                    else if(data[i].account == $scope.param.userName ){
                            alert("账号密码错误")
                        break
                    }
                    // else if(i==data.length){
                    //     alert("账号错误")
                    // }
                    else if(data[i].account != $scope.param.userName&& i==data.length-1)
                    {
                        alert("账号错误")
                    }
                    else {

                    }


                }
            }
        })

    }
})
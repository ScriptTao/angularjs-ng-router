/**
 *
 * Created by 脚本 on 2019/1/13.
 */
monitor.controller('navigationCtrl', function ($scope, $state, $stateParams, ngDialog
    , $interval, $timeout,locals) {
    $scope.navListOne = JSON.parse(locals.get('userInfo')).menu;
    $scope.userName = JSON.parse(locals.get('userInfo')).name;
    $interval(function () {
        $scope.nowdate = new Date();
    }, 1000);
    $scope.param = {
        oneStyle: "",
        twoStyle: "",
        leftSwitch: true,
        leftClickFlag: true,
        navigationTopFlag: true,
        navigationLeftFlag: true,
        teamInformationFlag: false,
        threeNavFlag: false
    };
    //控制左右显示
    $scope.leftSwitch = function () {
        if (!$scope.param.leftClickFlag) {
            return
        }
        $timeout(function () {
            $scope.param.leftClickFlag = true;
        }, 2000)
        if ($scope.param.leftSwitch) {
            $scope.param.leftClickFlag = false;
            $scope.param.leftSwitch = false;
        } else {
            $scope.param.leftClickFlag = false;
            $scope.param.leftSwitch = true;
        }
    };
    //默认选中
    $scope.param.oneStyle = "1";

    $scope.queryTwo = function (item) {
        $scope.param.oneStyle = item.menu_name
        $scope.twoList = item.children;
        fa_fn()
    };
    //退出登录
    $scope.logout = function () {
        var dialog = ngDialog.open({
            template: 'logout',
            scope: $scope,//这样就可以传递参数
            controller: ['$scope', '$interval', function ($scope, $interval) {
                $scope.sure = function () {
                    //推出登陆删除本地userInfo 跳到登陆页面
                    window.localStorage.removeItem("userInfo");
                    alert("退出成功")
                    $state.go("login")
                }
                $scope.close = function () {
                    $scope.closeThisDialog();
                };
                $scope.cancel = function () {
                };
            }],
            className: 'ngdialog-theme-default ngdialog-theme-custom',
            width: 300,
            height: 100,
            overlay: true
        });
        dialog.closePromise.then(function (data) {//右上角叉号事件
            console.log(dialog)
        });
    };
    $scope.param.twoStyle = "userManage"
    $scope.twoPageGo = function (item) {
        $scope.param.twoStyle = item.menu_url//控制样式
        $state.go("monitor-web." + item.menu_url + "");
    };
    $scope.threePageGo = function (item) {
        $scope.param.threeStyle = item.menu_url//控制样式
        $state.go("monitor-web." + item.menu_url + "");
    }

    //班组信息
    $scope.teamInformationenter = function () {
        $scope.param.teamInformationFlag = true;
    };
    $scope.teamInformationleave = function () {
        // $scope.param.teamInformationFlag = false;
    };

})
monitor.controller('userConfigCtrl', function ($scope, $state, $stateParams, ngDialog,createJson,GetHmiData) {
    $scope.menu_list = MENU_LIST;

    for (var i = 0; i < $scope.menu_list.length; i++) {
        debugger
        $scope.menu_list[i].choose = false;
        for (var q = 0; q < $scope.menu_list[i].children.length; q++) {
            $scope.menu_list[i].children[q].choose = false;
        }
    }
    $.ajax({
        url: "../angularjs-ng-router/user_menu.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data);
            $scope.userList = data
        }
    })
    $scope.checkOne = function (one) {
        for (var i = 0; i < one.children.length; i++) {
            one.children[i].choose = one.choose
        }
    }
    $scope.checkTwo = function (one, two) {
        one.choose = true;
        for (var i = 0; i < one.children.length; i++) {
            if (!one.children[i].choose) {
                one.choose = false;
            }
        }
    }

    $scope.addUser = function () {
        var dialog = ngDialog.open({
            template: 'dialog',
            scope: $scope,//这样就可以传递参数
            controller: ['$scope', '$interval', function ($scope, $interval) {
                $scope.sure = function () {

                    var temp_menu = [];
                    var temp_menu_p = [];
                    for (var i = 0; i < $scope.menu_list.length; i++) {
                        temp_menu_p.push($scope.menu_list[i])
                        for (var q = 0; q < $scope.menu_list[i].children.length; q++) {
                            if ($scope.menu_list[i].children[q].choose) {
                                temp_menu.push({
                                    menu_name: $scope.menu_list[i].menu_name,
                                    menu_url: $scope.menu_list[i].menu_url,
                                    children: [
                                        {
                                            menu_name: $scope.menu_list[i].children[q].menu_name,
                                            menu_url: $scope.menu_list[i].children[q].menu_url
                                        }
                                    ]
                                })
                            }
                        }
                    }
                    console.log(temp_menu_p);
                    console.log(temp_menu);

                    for (var i = 0; i < temp_menu_p.length; i++) {
                        temp_menu_p[i].children = [];
                    }
                    console.log(temp_menu_p);
                    for (var i = 0; i < temp_menu_p.length; i++) {
                        for (var q = 0; q < temp_menu.length; q++) {
                            if (temp_menu_p[i].menu_name == temp_menu[q].menu_name) {
                                for(var r = 0; r < temp_menu[q].children.length; r++){
                                    temp_menu_p[i].children.push({
                                        menu_name:temp_menu[q].children[r].menu_name,
                                        menu_url:temp_menu[q].children[r].menu_url
                                    })
                                }
                            }
                        }
                    }
                    console.log(temp_menu_p);

                    /*修改页面显示*/
                    $scope.userList.push({
                        name: $scope.name,
                        account: $scope.account,
                        password: $scope.password,
                        menu: temp_menu_p
                    })
                    /*提交数据给服务器*/
                    console.log($scope.userList);
                    createJson.save({
                        list:$scope.userList
                    },function (res) {
                        console.log(res);
                    })
                }
                $scope.close = function () {
                    $scope.closeThisDialog();
                };
                $scope.cancel = function () {
                    $scope.closeThisDialog();
                };
            }],
            className: 'ngdialog-theme-default ngdialog-theme-custom',
            width: 600,
            overlay: true
        });
        dialog.closePromise.then(function (data) {//右上角叉号事件
        });
    }
    $scope.del = function (item) {
        for(var i = 0; i < $scope.userList.length; i++){
            if($scope.userList[i].name == item.name){
                $scope.userList.splice(i,1)
            }
        }
        createJson.save({
            list:$scope.userList
        },function (res) {
            console.log(res);
        })
    }





})

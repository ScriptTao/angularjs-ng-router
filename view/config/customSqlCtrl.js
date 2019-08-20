/**
 * Created by 脚本 on 2019/2/25.
 */
monitor.controller('customSqlCtrl', function ($scope, $state, $stateParams, ngDialog, $interval
    , CustomFindByPage, CustomDeleteOne, CustomInsert, CustomUpdate, CustomFindByIndocno
    , commonFindData, commonFindBlob, GetHmiParam, SendMessage) {

    $scope.arr = [1,2,12,31,23,123]
    /**/
    /*GetHmiParam.save({
        tag_list: "Cut_Info,asd213"
    },function (res) {
        console.log(res);
    })
    commonFindData.save({
        key: "exuser",
        list: [
            {'@account': "\'测试\'"}
        ]
    }, function (res) {
        console.log(res)
    })

    commonFindData.save({
        key: "queryMysql",
        list: [
            {'@sname': "\'ceshi\'"}
        ]
    }, function (res) {
        console.log(res)
    })*/

    SendMessage.save({
        "msgList": [
            {
                "id": "msg",
                "timeout": 3,
                "reply": true,
                "data": [{"x": "1", "y": "2"}, {"x": "3", "y": "4"}]
            }
        ]
    }, function (res) {
        console.log(res);
    })
    // var acc = 'indocno'
    commonFindData.save({
        key: "testVersion",
        list: [
            {
                '@sname': "\'tsw\'"
            }
        ]
    }, function (res) {
        console.log(res)
    })
    //
    commonFindData.save({
        key: "testss",
        list: [
            {
                'coil_no': "H1904181236"
            }
        ]
    }, function (res) {
        console.log(res)
    })


    commonFindBlob.save({
        key: "testBlob",
        list: [
            {
                '@id': "\'123\'"
            }
        ]
    }, function (res) {
        console.log(res);
    })
    /*var data = {
        key:"testBlob",
        list:[
            {
                '@id':"\'123\'"
            }
        ]
    }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8087/service_bkgy/common/findBlob',
        data: data,
        success: function (res) {
            console.log(res);
        },
    });*/


    $scope.params = {
        queryObj: {
            control_key: "",
            control_sql: "",
            db_type: ""
        },
        addSqlobj: {
            control_key: "",
            control_sql: "",
            db_type: ""
        },
        modSqlobj: {
            control_key: "",
            control_sql: "",
            db_type: ""
        }
    }
    $scope.reset = function () {
        $scope.params.queryObj.control_key = ""
        $scope.params.queryObj.control_sql = ""
    }
    //分页
    $scope.paginationConf = {
        currentPage: 1,//当前页
        totalItems: 0,//allItem数
        itemsPerPage: 20,//一页多少个
        pagesLength: 10,//页码长度
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function () {
            $scope.queryList($scope.params.queryObj);
        }
    };
    $scope.queryList = function (queryUserObj) {
        CustomFindByPage.save({
            pageIndex: $scope.paginationConf.currentPage,
            pageSize: $scope.paginationConf.itemsPerPage,
            condition: queryUserObj
        }, function (data) {
            if (data.status == 2000) {
                $scope.paginationConf.totalItems = data.count//总条数
                $scope.sqlList = data.data;
            } else {
                alert(data.msg)
            }
        })
    };
    $scope.queryByCondition = function () {
        $scope.queryList($scope.params.queryObj);
    };
    //删除
    $scope.deleteSql = function (indocno) {
        ngDialog.open({
            template: 'deleteSql',
            scope: $scope,//这样就可以传递参数
            controller: ['$scope', '$interval', function ($scope, $interval) {
                $scope.sure = function () {
                    CustomDeleteOne.save({
                        indocno: indocno
                    }, function (response) {
                        if (response.status == 2000) {
                            alert("删除成功")
                        } else {
                            alert(response.msg)
                        }
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
            width: 300,
            overlay: true
        });

    };
    //新建
    $scope.addSql = function () {
        ngDialog.open({
            template: 'addSql',
            scope: $scope,//这样就可以传递参数
            controller: ['$scope', '$interval', function ($scope, $interval) {
                $scope.sure = function () {
                    CustomInsert.save({
                        controlInterface: {
                            control_key: $scope.params.addSqlobj.control_key,
                            control_sql: $scope.params.addSqlobj.control_sql,
                            db_type: $scope.params.addSqlobj.db_type
                        }
                    }, function (response) {
                        if (response.status == 2000) {
                            alert("添加成功")
                            $scope.closeThisDialog();
                            $scope.queryList($scope.params.queryObj);
                            $scope.params.addSqlobj.control_key = "";
                            $scope.params.addSqlobj.control_sql = "";
                        } else {
                            alert(response.msg)
                        }
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
            width: 500,
            overlay: true
        });
    };
    //修改
    $scope.modSql = function (indocno) {
        ngDialog.open({
            template: 'modSql',
            scope: $scope,//这样就可以传递参数
            controller: ['$scope', '$interval', function ($scope, $interval) {
                CustomFindByIndocno.save({
                    indocno: indocno
                }, function (response) {
                    if (response.status == 2000) {
                        $scope.params.modSqlobj.control_key = response.data.control_key;
                        $scope.params.modSqlobj.control_sql = response.data.control_sql;
                        $scope.params.modSqlobj.db_type = response.data.db_type;
                    } else {
                        alert(response.msg);
                    }

                })

                $scope.sure = function () {
                    CustomUpdate.save({
                        controlInterface: {
                            indocno: indocno,
                            control_key: $scope.params.modSqlobj.control_key,
                            control_sql: $scope.params.modSqlobj.control_sql,
                            db_type: $scope.params.modSqlobj.db_type
                        }
                    }, function (response) {
                        if (response.status == 2000) {
                            alert("修改成功")
                            $scope.closeThisDialog();
                            $scope.queryList($scope.params.queryObj);
                            $scope.params.addSqlobj.control_key = "";
                            $scope.params.addSqlobj.control_sql = "";
                        } else {
                            alert(response.msg)
                        }
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
            width: 500,
            overlay: true
        });
    }
})
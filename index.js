monitor.controller("mainCtrl", function ($scope, ngDialog, $state, $location, $interval
    , GetHmiData, SendTag, SendHmiParam) {
    $scope.projectName = PROJECTNAME;
    //
    /*
    * _api  String 接口名称
    * _api_param Object 请求参数
    * _diaId  String  弹窗ID
    * */
    $scope._dialogCallback = function (_api, _api_param, _diaId) {
        $scope.params = {
            allChoose: ""
        };
        _api.save(_api_param, function (reseponse) {
            if (reseponse.status == 2000) {
                for (var i = 0; i < reseponse.data.length; i++) {
                    reseponse.data.choose = false;
                }
                ;
                $scope.dataList = reseponse.data;
            } else {
                alert(reseponse.msg);
            }
        })
        ngDialog.open({
            template: _diaId,
            scope: $scope,
            controller: ['$scope', '$interval', function ($scope, $interval) {
                $scope.sure = function () {
                    $scope._dialogCallbackData = [];
                    for (var i = 0; i < $scope.dataList.length; i++) {
                        if ($scope.dataList[i].choose) {
                            $scope._dialogCallbackData.push($scope.dataList[i])
                        }
                    }
                    console.log($scope._dialogCallback);
                }
                $scope.close = function () {
                    $scope.closeThisDialog();
                };
                $scope.cancel = function () {
                    $scope.closeThisDialog();
                };
            }],
            className: 'ngdialog-theme-default ngdialog-theme-custom',
            // width: 300,
            overlay: true
        });

        //全选
        $scope.checkAll = function () {
            for (var i = 0; i < $scope.dataList.length; i++) {
                $scope.dataList[i].choose = $scope.params.allChoose;
            }
        }
        //单选
        $scope.checkOne = function (item, chooseBol) {
            $scope.params.allChoose = true;
            for (var i = 0; i < $scope.dataList.length; i++) {
                if (!$scope.dataList[i].choose) {
                    $scope.params.allChoose = false;
                }
            }
        }
    }
    /*
    * */
    $scope.getDataTag = function () {
        if ($(document).find("[data-tag]").length == 0) {
            return
        }
        var sub = {
            msgs: [],
            tags: []
        }
        $(document).find("[data-tag]").each(function (i, item) {
            console.log(i, item)
            sub.tags.push({
                name: $(item).attr("data-tag"),
                ts: "0"
            })
        })

        GetHmiData.save(sub, function (res) {
            // console.log(res.data.tagList);
            for (var i = 0; i < res.data.tagList.length; i++) {
                $("[data-tag=" + res.data.tagList[i].name + "]").val(res.data.tagList[i].value)
            }
        })
    };
    var timer = $interval(function () {
        if ($("div").length != 0) {
            $scope.getDataTag();
            // $interval.cancel(timer);//打开定时器
        }
    }, 5000);
    $scope.getDataTag();
    $scope._v = "";
    /*关闭双向功能*/
    /*setTimeout(function () {
        $(document).find("[data-tag]").each(function (i, item) {
            $(item).on({
                dblclick: function () {
                    $(item).removeAttr("readonly");
                    $scope._v = $(item).val();
                },
                blur: function () {
                    if ($scope._v == $(item).val()) {
                        $(item).attr({"readonly": "readonly"});
                        return
                    }
                    if (!confirm("确定将变量" + $(item).attr('data-tag') + "修改为" + $(item).val() + "吗?")) {
                        return
                    }
                    var mod = {
                        tagList: [{
                            name: $(item).attr('data-tag'),
                            value: $(item).val()
                        }]
                    }
                    SendTag.save(mod, function (res) {
                        if (res.data != undefined && res.code == 0) {
                            $(item).attr({"readonly": "readonly"});
                        }
                    })
                }
            })
        })
    }, 1000);*/


    $scope.setTime = 3000;
    window.TagCenter = {};
    var tag = [];
    function TagCenterFn(a) {
        var saveb = "";//处理ts的时间
        sf();
        setInterval(function () {
            sf();
        }, $scope.setTime)

        for (var i = 0; i < a.length; i++) {
            tag.push({
                name: a[i],
                ts: "0"
            })
        }

        function sf() {
            GetHmiData.save({
                msgs: [],
                tags: tag
            }, function (r) {
                var b = r.data.tagList;
                for (var i = 0; i < b.length; i++) {
                    for (var q = 0; q < tag.length; q++) {
                        if (tag[q].name == b[i].name) {
                            tag[q].name = b[i].name;
                            tag[q].ts = b[i].ts;
                        } else {

                        }
                    }
                    if (b[i].dataList != null) {
                        TagCenter[b[i].name] = b[i].dataList;
                    } else {
                        TagCenter[b[i].name] = b[i].value;
                    }
                }
                // console.log(TagCenter);
            })
        }
    }

    window.TagCenterFn = TagCenterFn
});



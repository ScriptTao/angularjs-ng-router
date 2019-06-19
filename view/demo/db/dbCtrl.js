monitor.controller('dbCtrl', function ($scope, $state, $stateParams, ngDialog , $interval,GetHmiParam,GetLogData,SendMessage,SendTag,GetLogData, commonFindData
) {

    commonFindData.save({
        key: "exuser",
        list: [
            {'@account': "\'测试\'"}//注意 需要用 "\'测试\'" 这种数据格式
        ]
    }, function (res) {
        if(res.status == 2000){
            $scope.exuser_val = res.data
        }
    })

})

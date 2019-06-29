monitor.controller('dbCtrl', function ($scope, $state, $stateParams, ngDialog , $interval,GetHmiParam,GetLogData,SendMessage,SendTag,GetLogData, commonFindData
) {
    $scope.ss = 'admin'
    commonFindData.save({
        key:"tests",
        list:[
            {
                // '@tsw': "\'admin\'"
                //变量形式
                '@tsw':"'"+$scope.ss+"'"
                //死值字符串形式
                //'@tsw':"\'tsw\'" //注意 需要用 "\'测试\'" 这种数据格式
            }
        ]
    },function (res) {
        console.log(res.data[0].PASSWORD)
    })
})

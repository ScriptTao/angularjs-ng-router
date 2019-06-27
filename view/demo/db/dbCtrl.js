monitor.controller('dbCtrl', function ($scope, $state, $stateParams, ngDialog , $interval,GetHmiParam,GetLogData,SendMessage,SendTag,GetLogData, commonFindData
) {

    commonFindData.save({
        key:"testss",
        list:[
            {
                '@tsw':"\'tsw\'"//注意 需要用 "\'测试\'" 这种数据格式
            }
        ]
    },function (res) {

    })

})

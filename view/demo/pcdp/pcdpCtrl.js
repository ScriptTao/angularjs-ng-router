monitor.controller('pcdpCtrl', function ($scope, $state, $stateParams, ngDialog, $interval, GetHmiParam, GetLogData, SendMessage, SendTag, commonFindData
) {
    /*GetHmiParam.save({
        tag_list: "Cut_Info,asd213"//中间件变量名 中间用","隔开
    },function (res) {
        console.log(res);
    })

    var data = {
        "startTime": "",
        "endTime": "",
        "keyword": "",
        "count": 3
    };
    GetLogData.save(data, function (response) {
        console.log(response);
    });

    var tags = [
        {
            "name": "asd213",
            "value": "test"
        },
    ];
    SendTag(tags, function (response) {
        console.log(response);
    });

    SendMessage.save({
        "id": "msg",
        "timeout": 3,
        "reply": true,
        "data": [
            {
                "x": "1",
                "y": "2"
            },
            {
                "x": "3",
                "y": "4"
            }
        ]
    },function (res) {
        console.log(res);
    })*/
})

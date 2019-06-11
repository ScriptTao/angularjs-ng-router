/**
 * Created by 脚本 on 2019/6/11.
 */
monitor.controller('GetLogDataCtrl', function ($scope, $state, $stateParams, ngDialog , $interval,sendTag,SendMessage,GetLogData) {
    var data = {
        "startTime": "",
        "endTime": "",
        "keyword": "",
        "count": 3
    };
    GetLogData.save(data, function (response) {
        console.log(response);
    });

})
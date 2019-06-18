/**
 * Created by 脚本 on 2019/6/11.
 */
monitor.controller('SendMessageCtrl', function ($scope, $state, $stateParams, ngDialog , $interval,SendMessage) {
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
    })

})
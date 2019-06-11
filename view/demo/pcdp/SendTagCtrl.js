/**
 * Created by 脚本 on 2019/6/11.
 */
monitor.controller('SendTagCtrl', function ($scope, $state, $stateParams, ngDialog , $interval,sendTag) {
    var tags = [
        {
            "name": "asd213",
            "value": "test"
        },
    ];
    sendTag(tags, function (response) {
        console.log(response);
    });
})
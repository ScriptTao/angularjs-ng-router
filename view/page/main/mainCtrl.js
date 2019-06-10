/**
 * Created by 脚本 on 2019/5/24.
 */
monitor.controller('mainCtrl', function ($scope, $state, $stateParams, ngDialog, $interval, $timeout, GetHmiData) {
    GetHmiData.save({
        tags: [{
            name: "asd",
            ts: "0"
        }],
        msg: []
    }, function (res) {
        HMICallBack(res,function (oldValue,newValue) {
            /*发生改变具体处理在此处理*/
            console.log(oldValue+","+newValue)
        })
    })

})
monitor.controller('dbCtrl', function ($scope, $state, $stateParams, ngDialog , $interval
 ,GetHmiParam,GetLogData,SendMessage,SendTag,GetLogData, commonFindData,commonFindBlob,commonFindBlobNo
) {
  /*  $scope.ss = 'admin'
    commonFindData.save({
        key:"tests",
        list:[
            {
                // '@tsw': "\'admin\'"
                //变量形式
                '@tsw':"'"+$scope.ss+"'",
                '@ww':"12312",
                //死值字符串形式
                //'@tsw':"\'tsw\'" //注意 需要用 "\'测试\'" 这种数据格式
                '@change':'CRM.TCM3_MFG.LENGTH'
            }
        ]
    },function (res) {
        console.log(res.data[0].PASSWORD)
    })

    var acc = 'tsw'
    commonFindData.save({
        key:"v1",
        list:[
            {
                account: "'"+acc+"'",
                // name:"zhangsan"
            }
        ]
    },function (res) {
        console.log(res)
    })*/

 /* $scope.ccc = [];
    commonFindBlob.save({
        key:"blob",
        list:[
            {
                '@ttt':"\'12345\'"
                // '@ttt':"\'124\'"
            }
        ]
    },function (res) {
        // console.log(res[0]);
        $scope.ccc = res[0].data[0]
        console.log($scope.ccc);
    })
    commonFindBlobNo.save({
        key:"blob",
        list:[
            {
                // '@ttt':"\'12345\'"
                '@ttt':"\'124\'"
            }
        ]
    },function (res) {
        console.log(res);
    })*/


    commonFindBlob.save({
        key:"blob",
        list:[
            {
                '@ttt':"\'12345\'"
                // '@ttt':"\'124\'"
            }
        ]
    },function (res) {
        // console.log(res[0]);
        // $scope.ccc = res[0].data[0]
        // console.log($scope.ccc);
    })

    /*$.ajax({
        url: "http://192.168.8.127:8087/service_bkgy/common/findBlob",
        type: "post",
        dataType: "json",
        data:JSON.stringify({ key:"blob", list:[
                {
                    '@ttt':"\'12345\'"
                }
            ] }),
        headers:{'Content-Type':'application/json;charset=utf8'},
        success: function (data) {
            console.log(data);
        }
    })*/

})

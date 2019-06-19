monitor.controller('tableSampleCtrl', function ($scope, $state, $stateParams, ngDialog, $interval, $timeout) {
    $scope.itemList = [
        {
            code: "20190816",
            type: "类型1",
            status: "状态1",
            num: "机架号1",
            pos: "位置1",
            gunNum: "辊号1",
            time: "时间1",
            xNum: "箱号1"
        },
        {
            code: "20190816",
            type: "类型2",
            status: "状态2",
            num: "机架号2",
            pos: "位置2",
            gunNum: "辊号2",
            time: "时间2",
            xNum: "箱号2"
        },
        {
            code: "20190816",
            type: "类型3",
            status: "状态3",
            num: "机架号3",
            pos: "位置3",
            gunNum: "辊号3",
            time: "时间3",
            xNum: "箱号3"
        },
        {
            code: "20190816",
            type: "类型4",
            status: "状态4",
            num: "机架号4",
            pos: "位置4",
            gunNum: "辊号4",
            time: "时间4",
            xNum: "箱号4"
        },
        {
            code: "20190816",
            type: "类型5",
            status: "状态5",
            num: "机架号5",
            pos: "位置5",
            gunNum: "辊号5",
            time: "时间5",
            xNum: "箱号5"
        },
    ];

    $scope.params = {
        code: "",
        status: "",
        type: "",
        num: "",
        pos: "",
        gunNum: "",
        time: "",
        xNum: "",
    }
    $scope.getDetails = function (item) {
        alert(item.code+','+item.status+','+item.type+','+item.num+','+item.pos+'等等');
        $scope.params.code = item.code;
        $scope.params.status = item.status;
        $scope.params.type = item.type;
        $scope.params.num = item.num;
        $scope.params.pos = item.pos;
        $scope.params.gunNum = item.gunNum;
        $scope.params.time = item.time;
        $scope.params.xNum = item.xNum;
    }
})
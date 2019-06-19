monitor.controller('pcdpSampleCtrl', function ($scope, $state, $stateParams, ngDialog , $interval,GetHmiParam,GetLogData,SendMessage,SendTag,GetLogData
                                               ,commonFindData,GetHmiData
) {
    GetHmiParam.save({
        tag_list: "Cut_Info,asd213"
    },function (res) {
        console.log(res);
        if(res.code == 2002){
            $scope.cut_info_list = res.data[0].dataList;//数据集变量
            $scope.asd213_val = res.data[1].value;//非数据集变量
        }
    })


})

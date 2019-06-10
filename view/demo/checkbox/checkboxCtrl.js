/**
 * Created by 脚本 on 2019/6/10.
 */
monitor.controller('checkboxCtrl', function ($scope, $state, $stateParams, ngDialog , $interval) {
    $scope.params = {
        checkbox1:true,
        checkbox2:true,
        checkbox3:false,
        checkbox4:false,
    }
    $scope.checkFn = function () {
        if($scope.params.checkbox1){
            alert('单选1')
        }
        if($scope.params.checkbox2){
            alert('单选2')
        }
        if($scope.params.checkbox3){
            alert('单选3')
        }
        if($scope.params.checkbox4){
            alert('单选4')
        }
    }
    $scope.check4Fn = function () {
        $scope.params.checkbox4 = true;
    }
})
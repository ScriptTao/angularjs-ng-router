/**
 * Created by 脚本 on 2019/6/10.
 */
monitor.controller('checkboxCtrl', function ($scope, $state, $stateParams, ngDialog , $interval) {
    $scope.params = {
        checkbox1:true,
        checkbox2:true,
        checkbox3:false,
        checkbox4:false,
        radio: "1"
    }

    $scope.radioFn = function(){
        alert($scope.params.radio)
    }
    $scope.radio3Fn = function(){
        $scope.params.radio = "3"
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
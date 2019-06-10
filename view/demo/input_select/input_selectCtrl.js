monitor.controller('input_selectCtrl', function ($scope, $state, $stateParams, ngDialog , $interval) {
    $scope.params = {
        inp:"first",
        sle:"选择2"
    }
    $scope.get = function () {
        alert(''+$scope.params.inp+','+$scope.params.sle+'')
    }
    $scope.set = function () {
        $scope.params.inp="test";
        $scope.params.sle="选择1";
    }
})
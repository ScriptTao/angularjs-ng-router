monitor.controller('datePickerCtrl', function ($scope, $state, $stateParams, ngDialog , $interval) {
    $scope.subdataTime = '';
    $scope.getdate = function () {
        alert($scope.subdataTime);
    }
    $scope.setdate = function () {
        $scope.subdataTime = getNowDate()
    }
})
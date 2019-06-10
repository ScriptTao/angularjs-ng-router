/**
 * Created by 脚本 on 2019/6/10.
 */
monitor.controller('dialogCtrl', function ($scope, $state, $stateParams, ngDialog , $interval) {
    $scope.open = function () {
        ngDialog.open({
            template: 'dialog',
            scope: $scope,
            controller: ['$scope', '$interval', function ($scope, $interval) {
                $scope.sure = function () {

                }
                $scope.close = function () {
                    $scope.closeThisDialog();
                };
                $scope.cancel = function () {
                    $scope.closeThisDialog();
                };
            }],
            className: 'ngdialog-theme-default ngdialog-theme-custom',
            // width: 300,
            overlay: true
        });
    }

})
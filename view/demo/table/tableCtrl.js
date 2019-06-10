monitor.controller('tableCtrl', function ($scope, $state, $stateParams, ngDialog , $interval) {
    //分页功能
    /*
    * 1.此分页为实时交互数据,非一次性拿到所有数据,前端做分页
    * 2.其中在onchange回调函数中 做数据库查询
    * 3.onchange在第一次加载页面时就会被调用
    * 4.$scope.queryList 查询方法中需要加上当前页数,一页多少个 传到后端
    * 5.拿到后端返回值 需要把总共多少条数 再赋值给$scope.paginationConf.totalItems
    * */
    $scope.paginationConf = {
        currentPage: 1,//当前页
        totalItems: 0,//allItem数
        itemsPerPage: 10,//一页多少个
        pagesLength: 10,//页码长度
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function () {
            $scope.queryList();
        }
    };

    $scope.queryList = function () {
        FindByPage.save({
            pageIndex: $scope.paginationConf.currentPage,
            pageSize: $scope.paginationConf.itemsPerPage,
            condition: queryUserObj
        }, function (data) {
            if (data.status == 2000) {
                $scope.paginationConf.totalItems = data.count//总条数赋值给$scope.paginationConf.totalItems
                $scope.userList = data.data;
            } else {
                alert(data.msg)
            }
        })
    };

    //时间选择器功能
    //测试读取当前选取值时间
    $scope.test = function () {
        console.log($scope.subdataTime);
    }
})
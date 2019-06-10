var monitor = angular.module('app', ['ui.router', 'oc.lazyLoad', 'ngDialog', 'ngResource', 'ngSanitize']);

monitor.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider",
    function($provide, $compileProvider, $controllerProvider, $filterProvider) {
        monitor.controller = $controllerProvider.register;
        monitor.directive = $compileProvider.directive;
        monitor.filter = $filterProvider.register;
        monitor.factory = $provide.factory;
        monitor.service = $provide.service;
        monitor.constant = $provide.constant;
    }
]);
monitor.run(['$rootScope', 'ngDialog', function($rootScope, ngDialog) {
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        document.title = toState.title;
        ngDialog.closeAll();
        $rootScope.nothing = false;
    });
}]);
monitor.config(function($httpProvider, $stateProvider, $urlRouterProvider) {
    const root = 'view/';
    $stateProvider
        .state('monitor-web', {
            url: '/monitor-web',
            templateUrl: root + 'page/navigation.html' + version,
            controller: 'navigationCtrl',
            title: "navigation",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "navigation",
                        files: [
                            root + "page/navigationCtrl.js" + version,
                            root + "page/navigation.css" + version,
                        ]
                    })
                }]
            }
        })
        //自定义接口
        .state('customSql', {
            url: '/customSql',
            templateUrl: root + 'config/customSql.html' + version,
            controller: 'customSqlCtrl',
            title: "自定义接口",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "customSql",
                        files: [
                            root + "config/customSqlCtrl.js" + version,
                            root + "config/customSql.css" + version,
                        ]
                    })
                }]
            }
        })
        //登录
        .state('login', {
            url: '/login',
            templateUrl: root + 'page/login/login.html' + version,
            controller: 'loginCtrl',
            title: "登录",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "login",
                        files: [
                            root + "page/login/loginCtrl.js" + version,
                            root + "page/login/login.css" + version,
                        ]
                    })
                }]
            }
        })
        //配置页面
        .state('userConfig', {
            url: '/userConfig',
            templateUrl: root + 'config/userConfig.html' + version,
            controller: 'userConfigCtrl',
            title: "人员设置页面",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "userConfig",
                        files: [
                            root + "config/userConfig.js" + version,
                        ]
                    })
                }]
            }
        })


        //项目主画面
        .state('monitor-web.main', {
            url: '/main',
            templateUrl: root + 'page/main/main.html' + version,
            controller: 'mainCtrl',
            title: "项目主页面",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "项目主页面",
                        files: [
                            root + "page/main/mainCtrl.js" + version,
                        ]
                    })
                }]
            }
        })
        /*demo模块*/

        //table表格示例 , 分页示例  ,日期插件的使用
        .state('table', {
            url: '/table',
            templateUrl: root + 'demo/table/table.html' + version,
            controller: 'tableCtrl',
            title: "普通制表页面",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "普通制表页面",
                        files: [
                            root + "demo/table/tableCtrl.js" + version,
                        ]
                    })
                }]
            }
        })
        //echart表格示例
        .state('echart', {
            url: '/echart',
            templateUrl: root + 'demo/echart/echart.html' + version,
            controller: 'echartCtrl',
            title: "echart",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "echart",
                        files: [
                            root + "demo/echart/echartCtrl.js" + version,
                        ]
                    })
                }]
            }
        })
    ;




    $urlRouterProvider.otherwise('/table');
    $httpProvider.interceptors.push('httpInterceptor');
});
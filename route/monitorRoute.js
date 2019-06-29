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
        .state('monitor-web.customSql', {
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
        .state('monitor-web.userConfig', {
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
        .state('monitor-web.table', {
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
        .state('monitor-web.echart', {
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
        //页面绑定中间件数据
        .state('monitor-web.autoBind', {
            url: '/autoBind',
            templateUrl: root + 'demo/autoBind/autoBind.html' + version,
            controller: 'autoBindCtrl',
            title: "autoBind",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "autoBind",
                        files: [
                            root + "demo/autoBind/autoBindCtrl.js" + version,
                            root + "demo/demo.css" + version,
                        ]
                    })
                }]
            }
        })
        //按钮示例
        .state('monitor-web.button', {
            url: '/button',
            templateUrl: root + 'demo/button/button.html' + version,
            controller: 'buttonCtrl',
            title: "button",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "button",
                        files: [
                            root + "demo/button/buttonCtrl.js" + version,
                            root + "demo/demo.css" + version,
                        ]
                    })
                }]
            }
        })
        //按钮示例
        .state('monitor-web.checkbox', {
            url: '/checkbox',
            templateUrl: root + 'demo/checkbox/checkbox.html' + version,
            controller: 'checkboxCtrl',
            title: "checkbox",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "checkbox",
                        files: [
                            root + "demo/checkbox/checkboxCtrl.js" + version,
                            root + "demo/demo.css" + version,
                        ]
                    })
                }]
            }
        })
        .state('monitor-web.datePicker', {
            url: '/datePicker',
            templateUrl: root + 'demo/datePicker/datePicker.html' + version,
            controller: 'datePickerCtrl',
            title: "datePicker",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "datePicker",
                        files: [
                            root + "demo/datePicker/datePickerCtrl.js" + version,
                            root + "demo/demo.css" + version,
                        ]
                    })
                }]
            }
        })
        .state('monitor-web.dialog', {
            url: '/dialog',
            templateUrl: root + 'demo/dialog/dialog.html' + version,
            controller: 'dialogCtrl',
            title: "dialog",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "dialog",
                        files: [
                            root + "demo/dialog/dialogCtrl.js" + version,
                            root + "demo/demo.css" + version,
                        ]
                    })
                }]
            }
        })
        .state('monitor-web.tableSample', {
            url: '/tableSample',
            templateUrl: root + 'demo/tableSample/tableSample.html' + version,
            controller: 'tableSampleCtrl',
            title: "table",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "table",
                        files: [
                            root + "demo/tableSample/tableSampleCtrl.js" + version,
                            root + "demo/demo.css" + version,
                        ]
                    })
                }]
            }
        })
        .state('monitor-web.divContainer', {
            url: '/divContainer',
            templateUrl: root + 'demo/divContainer/divContainer.html' + version,
            controller: 'divContainerCtrl',
            title: "divContainer",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "divContainer",
                        files: [
                            root + "demo/divContainer/divContainerCtrl.js" + version,
                            root + "demo/demo.css" + version,
                        ]
                    })
                }]
            }
        })
        .state('monitor-web.input_select', {
            url: '/input_select',
            templateUrl: root + 'demo/input_select/input_select.html' + version,
            controller: 'input_selectCtrl',
            title: "input_select",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "input_select",
                        files: [
                            root + "demo/input_select/input_selectCtrl.js" + version,
                            root + "demo/demo.css" + version,
                        ]
                    })
                }]
            }
        })

        .state('monitor-web.pcdp', {
            url: '/pcdp',
            templateUrl: root + 'demo/pcdp/pcdp.html' + version,
            controller: 'pcdpCtrl',
            title: "pcdp",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "pcdp",
                        files: [
                            root + "demo/pcdp/pcdpCtrl.js" + version,
                            root + "demo/demo.css" + version,
                        ]
                    })
                }]
            }
        })
        .state('monitor-web.pcdpSample', {
            url: '/pcdpSample',
            templateUrl: root + 'demo/pcdp/pcdpSample.html' + version,
            controller: 'pcdpSampleCtrl',
            title: "pcdpSample",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "pcdpSample",
                        files: [
                            root + "demo/pcdp/pcdpSampleCtrl.js" + version,
                            root + "demo/demo.css" + version,
                        ]
                    })
                }]
            }
        })
        .state('monitor-web.db', {
            url: '/db',
            templateUrl: root + 'demo/db/db.html' + version,
            controller: 'dbCtrl',
            title: "db",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: "db",
                        files: [
                            root + "demo/db/dbCtrl.js" + version,
                            root + "demo/demo.css" + version,
                        ]
                    })
                }]
            }
        })
    ;
    $urlRouterProvider.otherwise('/login');
    $httpProvider.interceptors.push('httpInterceptor');
});
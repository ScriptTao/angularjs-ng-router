
monitor.factory('httpInterceptor', ["$q", "$injector", function($q) {
        return {
            request: function(config) {
                config.headers = config.headers || {};
                return config
            },
            requestError: function(err) {
                // console.log('requestError')
            },
            response: function(res) {
               // console.log('responseSuccess')
                return res;
            },
            responseError: function(err) {
                // console.log('responseError')
            }
        };
    }])
    //pcdp
    /*发送本项目所需要的变量*/
    .factory('SendHmiParam', ['$resource', function($resource) {
        return $resource(IP + 'webservice/createHash')
    }])
    .factory('GetHmiParam', ['$resource', function($resource) {
        return $resource(IP + 'webservice/getHashByParam')
    }])


    .factory('GetHmiData', ['$resource', function($resource) {
        return $resource(IP + 'webservice/getHmiData')
    }])
    .factory('GetLogData', ['$resource', function($resource) {
        return $resource(IP + 'webservice/getLogData')
    }])
    .factory('SendTag', ['$resource', function($resource) {
        return $resource(IP + 'webservice/sendTag')
    }])
    .factory('SendMessage', ['$resource', function($resource) {
        return $resource(IP + 'webservice/sendMessage')
    }])
    .factory('GetLogData', ['$resource', function($resource) {
        return $resource(IP + 'webservice/getLogData')
    }])

    //本地缓存操作
    .factory('locals', ['$window', function ($window) {
        return {        //存储单个属性
            set: function (key, value) {
                $window.localStorage[key] = value;
            },        //读取单个属性
            get: function (key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },        //存储对象，以JSON格式存储
            setObject: function (key, value) {
                $window.localStorage[key] = JSON.stringify(value);//将对象以字符串保存
            },        //读取对象
            getObject: function (key) {
                return JSON.parse($window.localStorage[key] || '{}');//获取字符串并解析成对象
            }

        }
    }])
    //自定义接口
    //查询
    .factory('CustomFindByPage', ['$resource', function($resource) {
        return $resource(IP + 'controlInterface/findByPage')
    }])
    //添加
    .factory('CustomInsert', ['$resource', function($resource) {
        return $resource(IP + 'controlInterface/insert')
    }])
    //查询单条
    .factory('CustomFindByIndocno', ['$resource', function($resource) {
        return $resource(IP + 'controlInterface/findByIndocno')
    }])

    //修改
    .factory('CustomUpdate', ['$resource', function($resource) {
        return $resource(IP + 'controlInterface/update')
    }])
    //删除
    .factory('CustomDeleteOne', ['$resource', function($resource) {
        return $resource(IP + 'controlInterface/deleteOne')
    }])

    //数据字典查询
    .factory('getDataByCodeDict', ['$resource', function($resource) {
        return $resource(IP + 'sysDict/getDataByCode')
    }])
    //自定义sql查询
    .factory('commonFindData', ['$resource', function($resource) {
        return $resource(IP + 'common/findData')
    }])
    //http://localhost:8089/json/createJson
    .factory('createJson', ['$resource', function($resource) {
        return $resource(IP + 'json/createJson')
    }])

;
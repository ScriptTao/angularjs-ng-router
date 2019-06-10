monitor.controller('echartCtrl', function ($scope, $state, $stateParams, ngDialog , $interval,commonFindData) {
    commonFindData.save({
        key:"v2",
        list:[]
    },function (res) {
        var tempData = [];
        for(var i = 0; i < res.data.length; i++){
            tempData.push(res.data);
        }
        basicLine(tempData);
    })



    function basicLine(data) {
        var option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],//data传入
                type: 'line'
            }]
        };
        var myChart = echarts.init(document.getElementById('basicLine'));
        myChart.setOption(option);
    }
    function basicArea(data) {
        var option = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }]
        };

        var myChart = echarts.init(document.getElementById('basicArea'));
        myChart.setOption(option);
    }
    function lineBar(data) {
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            legend: {
                data:['蒸发量','降水量','平均温度']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '水量',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                },
                {
                    type: 'value',
                    name: '温度',
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }
            ],
            series: [
                {
                    name:'蒸发量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name:'降水量',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name:'平均温度',
                    type:'line',
                    yAxisIndex: 1,
                    data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ]
        };
        var myChart = echarts.init(document.getElementById('lineBar'));
        myChart.setOption(option);
    }
    function barSimple(data) {
        var option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        };
        var myChart = echarts.init(document.getElementById('barSimple'));
        myChart.setOption(option);
    }
    function basicScatter(data) {
        var option = {
            xAxis: {},
            yAxis: {},
            series: [{
                symbolSize: 20,
                data: [
                    [10.0, 8.04],
                    [8.0, 6.95],
                    [13.0, 7.58],
                    [9.0, 8.81],
                    [11.0, 8.33],
                    [14.0, 9.96],
                    [6.0, 7.24],
                    [4.0, 4.26],
                    [12.0, 10.84],
                    [7.0, 4.82],
                    [5.0, 5.68]
                ],
                type: 'scatter'
            }]
        };
        var myChart = echarts.init(document.getElementById('basicScatter'));
        myChart.setOption(option);
    }
    function basicPie(data) {
        var option = {
            title: {
                text: "饼状图",
                // subtext: '虚构数据',//小标题
                left: 'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                bottom: 10,
                left: 'center',
                data: ['西凉', '益州', '兖州', '荆州', '幽州'],
            },
            series : [
                {
                    type: 'pie',
                    radius : '65%',
                    center: ['50%', '50%'],
                    data:[ {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:274, name:'联盟广告'},
                        {value:235, name:'视频广告'},
                        {value:400, name:'搜索引擎'}],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                },

            ]

        };
        var myChart = echarts.init(document.getElementById('basicPie'));
        myChart.setOption(option);
    }
    function basicBarX(data) {
        var option = {
            title: {
                text: '世界人口总量',
                subtext: '数据来自网络'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['2011年', '2012年']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name: '2012年',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        };
        var myChart = echarts.init(document.getElementById('basicBarX'));
        myChart.setOption(option);
    }
    function basic3d(data) {
        var data = [];
        for (var t = 0; t < 25; t += 0.001) {
            var x = (1 + 0.25 * Math.cos(75 * t)) * Math.cos(t);
            var y = (1 + 0.25 * Math.cos(75 * t)) * Math.sin(t);
            var z = t + 2.0 * Math.sin(75 * t);
            data.push([x, y, z]);
        }
        var option = {
            tooltip: {},
            backgroundColor: '#fff',
            visualMap: {
                show: false,
                dimension: 2,
                min: 0,
                max: 30,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                }
            },
            xAxis3D: {
                type: 'value'
            },
            yAxis3D: {
                type: 'value'
            },
            zAxis3D: {
                type: 'value'
            },
            grid3D: {
                viewControl: {
                    projection: 'orthographic'
                }
            },
            series: [{
                type: 'line3D',
                data: data,
                lineStyle: {
                    width: 4
                }
            }]
        };

        var myChart = echarts.init(document.getElementById('basic3d'));
        myChart.setOption(option);
    }

    setTimeout(function () {
        basicLine()
        basicArea()
        lineBar()
        barSimple()
        basicScatter()
        basicPie()
        basicBarX()
        basic3d()
    },1000)
})
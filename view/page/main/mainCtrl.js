/**
 * Created by 脚本 on 2019/5/24.
 */
monitor.controller('mainCtrl', function ($scope, $state, $stateParams, ngDialog, $interval, $timeout, GetHmiData) {
    /* HMICallBack(res, function (oldValue, newValue) {
             /!*发生改变具体处理在此处理*!/
             console.log(oldValue + "," + newValue)
         })*/
   /* GetHmiData.save({
        tags: [
            {
                name: "test",
                ts: "0"
            }
        ],
        msg: []
    }, function (data) {
        var data3d = data.tagList[0].dataList;
        var resultdata = [];
        for (var i = 0; i < data3d.length; i++) {
            var j = 0
            for (key in data3d[i]) {
                j++
                resultdata.push(
                    [
                        Number(i+1),
                        Number(j),
                        Number(data3d[i]["w"+j])
                    ]
                )
            }

        }
        console.log(resultdata);
        var option = {
            title:{
                text:"轧辊三维磨损图"
            },
            visualMap: {
                show:false,
                seriesIndex:0,
                max: 3000,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                }
            },
            xAxis3D: {
                // type: 'category',
                type: 'category',
                // max:222
            },
            yAxis3D: {
                type: 'value',
                // type: 'category',
                // type: 'category',
                // max:20
            },
            zAxis3D: {
                type: 'value',
                // max:2600
            },

            grid3D: {
                axisLine:{
                    // show:false
                },
                boxWidth:280,
                viewControl:{
                    distance:200,

                }

            },
            series: {
                // type: 'bar3D',
                // type: 'scatter3D',
                type: 'line3D',
                data: resultdata,
                lineStyle: {
                    width: 6
                }
                // stack: 'stack',
                /!*shading: 'lambert',
                emphasis: {
                    label: {
                        show: false
                    }
                }*!/
            }

        }
        var myChart1 = echarts.init(document.getElementById("echar3_one"));
        myChart1.setOption(option);
    })*/

    GetHmiData.save({
        tags: [
            {
                name: "test2",
                ts: "0"
            }
        ],
        msg: []
    },function (res) {

    })
})
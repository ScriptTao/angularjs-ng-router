monitor.controller('cspCtrl', function ($scope, $state, $stateParams, ngDialog, $interval, GetHmiData) {
    var tagData = '';
    /*
    * 最小位置-0.1
    * 到f1 13.6m
    * 到f2 19.19m
    * 到f3 25m
    * 到f4 30.57m
    * 到f5 36.24m
    * 到f6 42.17m
    * 到f7 47.14m
    *
    *
    * f1抛钢
    * */
    var head_pos = 13.6;
    var tail_pos = 0;//-8.1 定值
    var shiji_length = 5.4 + (5.5 * 6) + 4.5;
    var yemian_length = 1643;
    var div_width
    var steel_1 //坯尾div
    var cspinterval = setInterval(function () {
        // console.log($stateParams)
        if ($state.current.url == '/csp') {
            GetHmiData.save({
                tags: [
                    {
                        name: "COMMON.Head_Pos",
                        ts: "0"
                    }, {
                        name: "COMMON.Tail_Pos",
                        ts: "0"
                    }
                ],
                msg: []
            }, function (res) {
                head_pos = res.data.tagList[0].value;
                tail_pos = res.data.tagList[1].value;
                head_pos = (head_pos - 8.1) < 0 ? 0 : (head_pos - 8.1);
                tail_pos = (tail_pos - 8.1) < 0 ? 0 : (tail_pos - 8.1);
                animationFn()
            })
        } else {
            clearInterval(cspinterval);
        }

    }, 1000)

    //模拟
    /* var cc = setInterval(function () {
         /!*head_pos++
         if (head_pos >= 40) {
             tail_pos++
         }
         if (tail_pos >= 40) {
             clearInterval(cc)
         }*!/

     }, 1000)*/


    $scope.animation_time = {
        s1_big: "animation-duration: 8s",
        s2_big: "animation-duration: 7s",
        s3_big: "animation-duration: 6.5s",
        s4_big: "animation-duration: 6s",
        s5_big: "animation-duration: 5.5s",
        s6_big: "animation-duration: 5s",
        s7_big: "animation-duration: 4.5s",
        s1_small: "animation-duration: 4s",
        s2_small: "animation-duration: 3.5s",
        s3_small: "animation-duration: 3s",
        s4_small: "animation-duration: 2.5s",
        s5_small: "animation-duration: 2s",
        s6_small: "animation-duration: 1.5s",
        s7_small: "animation-duration: 1s",
    }

    function animationFn() {
        div_width = ((head_pos - tail_pos) * yemian_length) / shiji_length;
        steel_1 = (tail_pos * yemian_length) / shiji_length;
        $('.steel').width(div_width);
        $('.steel_1').width(steel_1);
        if (div_width >= 415 && $('.steel_1').width() <= 0) {//到s2
            $('.s1_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
        }
        if (div_width >= 633 && $('.steel_1').width() <= 0) {//到s3
            $('.s1_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
        }
        if (div_width >= 845 && $('.steel_1').width() <= 0) {//到s4
            $('.s1_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
        }
        if (div_width >= 1060 && $('.steel_1').width() <= 0) {//到s5
            $('.s1_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s4_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
        }
        if (div_width >= 1270 && $('.steel_1').width() <= 0) {//到s6
            $('.s1_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s4_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s5_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
        }
        if (div_width >= 1486 && $('.steel_1').width() <= 0) {//到s7
            $('.s1_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s4_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s5_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s6_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
        }
        if (div_width >= 1643 && $('.steel_1').width() <= 0) {
            $('.s1_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s4_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s5_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s6_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
            $('.s7_rotate_ding').css({'animation': 'rotate_ding 2s forwards'})
        }

        //下落
        if ($('.steel_1').width() >= 422) {//到s2
            $('.s1_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
        }
        if ($('.steel_1').width() >= 636) {//到s3
            $('.s1_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
        }
        if ($('.steel_1').width() >= 851) {//到s4
            $('.s1_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
        }
        if ($('.steel_1').width() >= 1063) {//到s5
            $('.s1_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s4_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
        }
        if ($('.steel_1').width() >= 1276) {//到s6
            $('.s1_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s4_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s5_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
        }
        if ($('.steel_1').width() >= 1492) {//到s7
            $('.s1_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s4_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s5_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s6_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
        }
        if ($('.steel_1').width() >= 1643) {
            $('.s1_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s2_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s3_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s4_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s5_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s6_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
            $('.s7_rotate_ding').css({'animation': 'rotate_ding_1 2s forwards'})
        }
    }

    $scope.ngMouseMove = function (ev, text) {
        console.log('1')
        if(tagData == ''){
            return
        }
        console.log('2')
        $('.diog_open').css({'left': 20 + ev.pageX, 'top': 20 + ev.pageY})
        $('.diog_open').html('<ul>\n' +
            '            <li> <span class="c_ fr"></span> 传动侧轧制力: '+tagData[text].FR_DS+'</li>\n' +
            '            <li> <span class="c_ fr"></span> 操作侧轧制力: '+tagData[text].FR_OS+'</li>\n' +
            '            <li> <span class="c_ gap"></span> 传动侧辊缝: '+tagData[text].GAP_DS+'</li>\n' +
            '            <li> <span class="c_ gap"></span> 操作侧辊缝: '+tagData[text].GAP_OS+'</li>\n' +
            '            <li> <span class="c_ looper"></span> 活套角度: '+tagData[text].Looper_Angle+'</li>\n' +
            '            <li> <span class="c_ looper"></span> 活套套量: '+tagData[text].Looper_Stork+'</li>\n' +
            '            <li> <span class="c_ looper"></span> 活套张力: '+tagData[text].Looper_Tension+'</li>\n' +
            '\n' +
            '        </ul>')
        // $('.diog_open').html('12312313')
    }
    $scope.ngMouseOver = function () {
        $('.diog_open').show()
    }
    $scope.ngMouseOut = function () {
        $('.diog_open').hide()
    }
    
    function getL1TagsMill() {
        GetHmiData.save({
            tags: [
                {
                    name: "L1Tags_MILL",
                    ts: "0"
                }
            ],
            msg: []
        }, function (res) {
            tagData = res.data.tagList[0].dataList;
        })
    }

    var tagsInterval = setInterval(function () {
        if ($state.current.url == '/csp') {
            getL1TagsMill();
        }else {
            clearInterval(tagsInterval);
        }
    },3000)
})


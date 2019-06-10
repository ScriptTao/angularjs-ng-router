/*
 */

monitor
    .filter("pdzero", function() {
        return function(inputInt) {
            var int = inputInt.toString().length > 1 ? inputInt : '0' + inputInt;
            return int;
        }
    })

    .filter("parseInt", function() {
        return function(inputInt) {
            if (!isNaN(inputInt)) {
                return parseInt(inputInt)
            } else {
                return ''
            }
        }
    })
    .filter("forDate", function() {
        return function(inputInt) {
            if(!inputInt){
                return
            }
            var val = inputInt.split("T")[0]+' '+inputInt.split("T")[1].split(".000")[0]
            return val
        }
    })
    .filter("showWeek", function() {
        return function(inputInt) {
            var week = ''
            switch (inputInt) {
                case 'Monday':
                    week = '周一'
                    break;
                case 'Tuesday':
                    week = '周二'
                    break;
                case 'Wednesday':
                    week = '周三'
                    break;
                case 'Thursday':
                    week = '周四'
                    break;
                case 'Friday':
                    week = '周五'
                    break;
                case 'Saturday':
                    week = '周六'
                    break;
                case 'Sunday':
                    week = '周日'
                    break;
            }
            return week
        }
    })
    .filter("convertWeek", function() {
        return function(inputInt) {
            var week = ''
            switch (inputInt) {
                case 1:
                    week = '周一'
                    break;
                case 2:
                    week = '周二'
                    break;
                case 3:
                    week = '周三'
                    break;
                case 4:
                    week = '周四'
                    break;
                case 5:
                    week = '周五'
                    break;
                case 6:
                    week = '周六'
                    break;
                case 0:
                    week = '周日'
                    break;
            }
            return week
        }
    })
    .filter("inMorning", function() {
        return function(inputIntOne) {
            var inMorning = inputIntOne;
            for (var o in inMorning) {
                var hour = parseInt(o.split(':')[0]);
                if (hour > 12) {
                    delete inMorning[o];
                }
            }
            return inMorning
        }
    })
    .filter("inAfternoon", function() {
        return function(inputIntTwo) {
            var inAfternoon = inputIntTwo;
            for (var o in inAfternoon) {
                var hour = parseInt(o.split(':')[0]);
                if (hour < 13) {
                    delete inAfternoon[o];
                }
            }
            return inAfternoon
        }
    })
    .filter("nowdateFom",function () {
        return function (inputInt) {
            if(inputInt == undefined){
                return
            }
            function dateFilter(date){
                if(date < 10){return "0"+date;}
                return date;
            }
            var year = inputInt.getFullYear();
            var month = inputInt.getMonth()+1;
            var date = inputInt.getDate();
            var day = inputInt.getDay();
            var weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
            var week = weeks[day];
            var hour = inputInt.getHours();
            var minute = inputInt.getMinutes();
            var second = inputInt.getSeconds();
            var timeValue = "" +((hour >= 12) ? (hour >= 18) ? "晚上" : "下午" : "上午" );
            return dateFilter(year)+"年"+dateFilter(month)+"月"+dateFilter(date)+"日 "+" "+dateFilter(hour)+":"+dateFilter(minute)+":"+dateFilter(second);
        }
    })
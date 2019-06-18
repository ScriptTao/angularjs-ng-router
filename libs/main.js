/**
 * Created by 脚本 on 2019/2/21.
 */
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};


function makeFormData(obj, form_data)
{
    var data = [];
    if (obj instanceof File)
    {
        data.push({key: "", value: obj});
    }
    else if (obj instanceof Array )
    {
        for (var j=0,len=obj.length;j<len;j++)
        {
            var arr = makeFormData(obj[j]);
            for (var k=0,l=arr.length;k<l;k++)
            {
                var key = !!form_data ? j+arr[k].key : "["+j+"]"+arr[k].key;
                data.push({key: key, value: arr[k].value})
            }
        }
    }
    else if (typeof obj == 'object')
    {
        for (var j in obj)
        {
            var arr = makeFormData(obj[j]);
            for (var k=0,l=arr.length;k<l;k++)
            {
                var key = !!form_data ? j+arr[k].key : "["+j+"]"+arr[k].key;
                data.push({key: key, value: arr[k].value})
            }
        }
    }
    else
    {
        data.push({key: "", value: obj});
    }
    if (!!form_data)
    {
        // 封装
        for (var i=0,len=data.length;i<len;i++)
        {
            form_data.append(data[i].key, data[i].value)
        }
    }
    else
    {
        return data;
    }
}

function uniq(array){
    var temp = [];
    for(var i = 0; i < array.length; i++) {
        if(array.indexOf(array[i]) == i){
            temp.push(array[i])
        }
    }
    return temp;
};

function isEmptyObject(obj){
    for(var key in obj){
        return false
    };
    return true
};

let old = ""
function HMICallBack(val,callback) {
    // let old = val.data.tagList[0].value;
    if (old == val.data.tagList[0].value) {
        /*发生变化时return*/
        console.log("nochange")
        return false
    } else {
        /*处理第一次请求*/
        if (old == "") {
            console.log("nochange")
        } else {
            callback(old, val.data.tagList[0].value)
        }
        old = val.data.tagList[0].value
    }
}

function fa_fn() {
    var fatime = setInterval(function () {
      if($('.two_b').length > 0 ){
          clearInterval(fatime)
          let falist = $('.two_b')
          for(var i = 0; i < falist.length; i++){
              switch(i) {
                  case 0:
                      falist.eq(i).find('i').addClass('fa-paste')
                      break;
                  case 1:
                      falist.eq(i).find('i').addClass('fa-list')
                      break;
                  case 2:
                      falist.eq(i).find('i').addClass('fa-rotate-left')
                      break;
                  case 3:
                      falist.eq(i).find('i').addClass('fa-bar-chart-o ')
                      break;
                  case 4:
                      falist.eq(i).find('i').addClass('fa-pie-chart')
                      break;
                  case 5:
                      falist.eq(i).find('i').addClass('fa-ils')
                      break;
                  case 6:
                      falist.eq(i).find('i').addClass('fa-align-right')
                      break;
                  case 7:
                      falist.eq(i).find('i').addClass('fa-file-text')
                      break;
                  case 8:
                      falist.eq(i).find('i').addClass('fa-television')
                      break;
                  case 9:
                      falist.eq(i).find('i').addClass('fa-tags')
                      break;
                  case 10:
                      falist.eq(i).find('i').addClass('fa-futbol-o')
                      break;
                  case 11:
                      falist.eq(i).find('i').addClass('fa-paper-plane')
                      break;
                  case 12:
                      falist.eq(i).find('i').addClass('fa-id-card-o')
                      break;
                  case 13:
                      falist.eq(i).find('i').addClass('fa-window-restore')
                      break;
                  case 14:
                      falist.eq(i).find('i').addClass('fa-picture-o')
                      break;
                  case 15:
                      falist.eq(i).find('i').addClass('fa-desktop')
                      break;
                  case 16:
                      falist.eq(i).find('i').addClass('fa-star-o')
                      break;
                  default:
                      falist.eq(i).find('i').addClass('fa-eraser')
              }
          }
      }
    },10)
}
function getNowDate(type) {
    var date = new Date();
    if(type != undefined){
        return date.getTime();
    }else {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
        var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
        var currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate
            + " "  + date.getHours()  + seperator2  + date.getMinutes()
            + seperator2 + date.getSeconds();
        return currentdate;
    }
}


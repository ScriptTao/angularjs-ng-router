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


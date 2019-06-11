const IP = 'http://127.0.0.1:8089/';
// const IP = 'http://172.20.10.2:8089/';


const MENU_LIST = [
    /*一级菜单*/
    {
        menu_name: "test0",
        menu_url: "",
        /*二级菜单*/
        children: [
            {
                menu_name: "test01",
                menu_url: "",
            },
            {
                menu_name: "test02",
                menu_url: "",
            },
        ]
    },
    /*一级菜单*/
    {
        menu_name: "test1",
        menu_url: "",
        /*二级菜单*/
        children: [
            {
                menu_name: "test11",
                menu_url: "",
            },
            {
                menu_name: "test12",
                menu_url: "",
            },
        ]
    },
    {
        menu_name: "示例",
        menu_url: "",
        /*二级菜单*/
        children: [
            {
                menu_name: "绑定变量",
                menu_url: "autoBind",
            },
            {
                menu_name: "按钮",
                menu_url: "button",
            },
            {
                menu_name: "弹窗",
                menu_url: "dialog",
            },
            {
                menu_name: "单选框",
                menu_url: "checkbox",
            },
            {
                menu_name: "日期选择",
                menu_url: "datePicker",
            },
            {
                menu_name: "div布局",
                menu_url: "divContainer",
            },
            {
                menu_name: "数据可视化",
                menu_url: "echart",
            },
            {
                menu_name: "输入框下拉框",
                menu_url: "input_select",
            },
            {
                menu_name: "页面基本结构",
                menu_url: "table",
            },
            {
                menu_name: "GetHmiParam",
                menu_url: "GetHmiParam",
            },
            {
                menu_name: "GetLogData",
                menu_url: "GetLogData",
            },
            {
                menu_name: "SendHmiParam",
                menu_url: "SendHmiParam",
            },
            {
                menu_name: "SendMessage",
                menu_url: "SendMessage",
            },
            {
                menu_name: "SendTag",
                menu_url: "SendTag",
            },
        ]
    },
];

const PROJECTNAME = "冷轧工艺模型集成优化及智能分析系统"

const PCDPTAGS = "Cut_Info,asd213,123"


const THEME = "";//
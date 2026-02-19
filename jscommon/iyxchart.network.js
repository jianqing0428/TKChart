/*
   Copyright (c) 2026 TradeKine Lab

   数据请求分装 可以根据不同的平台 替换网络请求模块
*/

function JSNetwork()
{

}

/*
JSNetwork.HttpReqeust=function(obj) //对请求进行封装
{
    $.ajax(
        { 
            url: obj.url, data: obj.data,
            type:obj.type, dataType: obj.dataType,async:obj.async, 
            success: obj.success,
            error: obj.error,
        }
    );
}
*/


JSNetwork.HttpRequest=function(obj) //对请求进行封装
{
    $.ajax(
        { 
            url: obj.url, data: obj.data,
            type:obj.type, dataType: obj.dataType,async:obj.async, 
            success: obj.success,
            error: obj.error,
        }
    );
}


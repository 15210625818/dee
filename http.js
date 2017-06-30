/*
一.创建一个服务器
要求： 1.用到switch语句来处理请求
2.最少三个页面(不算报错页面)，这三个页面间可以相互跳转
3.某一个页面上必须有图片，外部的css和js代码
4.如果输入的请求没有定义，发送一个报错页面
二.整理git的指令（本地的）
三.把作业1上传到github
*/

var http = require("http");
var fs = require("fs");
http.createServer(function (req,res) {
    var url = req.url;
    switch(url){
        case "/":
            fs.readFile("index1.html","utf-8",function (err,data) {
                if(err){
                    console.log("读取失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"text/html"})
                    res.end(data)
                }
            })
            break;
        case "/index.js":
            fs.readFile("index.js","utf-8",function (err,data) {
                if(err){
                    console.log("读取失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"text/javascript"})
                    res.end(data)
                }
            })
            break;
        case "/index.css":
            fs.readFile("index.css","utf-8",function (err,data) {
                if(err){
                    console.log("读取失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"text/css"})
                    res.end(data)
                }
            })
            break;
        case "/index2.html":
            fs.readFile("index2.html","utf-8",function (err,data) {
                if(err){
                    console.log("读取失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"text/html"})
                    res.end(data)
                }
            })
            break;
        case "/index3.html":
            fs.readFile("index3.html","utf-8",function (err,data) {
                if(err){
                    console.log("读取失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"text/html"})
                    res.end(data)
                }
            })
            break;
        case "/00.jpg":
            fs.readFile("00.jpg",function (err,data) {
                if(err){
                    console.log("读取图片失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"image/jpeg"})
                    res.end(data)
                }
            })
            break;
        default:
            fs.readFile("err.html",function (err,data) {
                if(err){
                    console.log(err)
                }else{
                    res.writeHead(200,{"content-type":"text/html"})
                    res.end(data)
                }
            })
    }
}).listen(3000)
console.log("localhost:3000")
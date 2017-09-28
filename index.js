// console.log("started");

// const a = require('./add');
// console.log(a(2,3));


// console.log("exit");

// var http = require("http");

// http.createServer(function(request, response){

//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.end('Hello world');
// }).listen(8081);

// console.log("server running at 8081");

//synchronous programming
// var fs = require("fs");
// var data = fs.readFileSync("input.txt");
// console.log(data.toString());

// console.log("program ended...");

//Asynchronous programming of loading

// var fs = require("fs");
// fs.readFile('input.txt',function(err,data){

//     if(err) {return console.error(err)}
//     console.log(data.toString());
// });

// console.log("Program has been ended...");

var express = require('express');
var controller = require('./controller');

var app = express();

var port = 4000;

controller.init(app);

app.listen(port,function(err){
    console.log("listening to port:"+ port.toString());
})


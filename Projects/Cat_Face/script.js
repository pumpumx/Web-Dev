var http = require('http');
var fs = require('fs');

http.createServer(function(request , response){
    fs.readFile('NewDemo.html' , function(err , data){
        response.writeHead(200 , {'Content-Type':'Text/Html'});
        response.write(data);
        return response.end();
    })
}).listen(8090);
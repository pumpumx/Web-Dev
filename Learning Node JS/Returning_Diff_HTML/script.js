var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function(request, response){
    var q = url.parse(request.url,true);
    var file_path  = '.' + q.pathname; 
    fs.readFile(file_path , function(err , data){
        if(err){
            response.writeHead(404 , {'content-type':'text/html'});
            return response.end('404 Not Found');
        }
       response.writeHead(200 , {'Content-Type':'text/html'});
        response.write(data);
        return response.end();
    });
}).listen(8090);
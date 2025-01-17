// let http = require("http");

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type': 'text/html'});
//     res.write(req.url);
//     res.end();
// }).listen(8080);

const os = require('os');
console.log(os.hostname());
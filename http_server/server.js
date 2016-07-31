    var http = require("http");
    var fs = require("fs");


    http.createServer(function(req,res){
        res.writeHead(200,{"Content-Type":"text/html"});
        var html_data = fs.readFileSync(__dirname + "/index.html","utf8");
        html_data = html_data.replace("{data}","Some sort of data");
        res.end(html_data);
    }).listen(3000);


'use strict';
    
    const http = require('http')
    const url = require("url")
    const fs = require("fs")
    const path = require("path") 
    let mimes = {
        '.htm':'text/html',
        '.css':'text/css',
        '.js':'text/javascript',
        'jpg':'image/jpeg',
        'png':'image/png'
    }

    function webServer(req,res){
        let baseURI = url.parse(req.url);
        let filePath = process.cwd()+(baseURI.pathname === '/' ? '/page/home.html' : baseURI.pathname)
        //console.log(filePath);

        fs.access(filePath,fs.F_OK,error=>{
            if(!error){
                fs.readFile(filePath,(err,content)=>{
                    if(!error){
                       let contentType = mimes[path.extname(filePath)];
                       res.writeHead(200,{'Content-Type':contentType})
                       res.end(content,'utf-8')
                    }else{
                        res.writeHead(500)
                        res.end("Internal Server Error")
                    }
                })
            }else{
                res.writeHead(404);
                res.end('Content Not found')
            }

        });



    
    }

    http.createServer(webServer).listen(3000,()=>{
        console.log("Server Runnning on Port 3000");
    })

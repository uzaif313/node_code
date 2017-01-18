
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


    function fileAccess(filepath){
       return new Promise((resolve,reject)=>{
            fs.access(filepath,fs.FS_OK,error=>{
                if(!error){
                   resolve(filepath) 
                }else{
                   reject(error) 
                }
            })
        });
    }

    function fileReader(filepath){
        return new Promise((resolve,reject)=>{
            fs.readFile(filepath,(error,content)=>{
                if(!error){
                    resolve(content)
                }else{
                    reject(error)
                }
            })
        })
    }

    function webServer(req,res){
        let baseURI = url.parse(req.url);
        let filePath = process.cwd()+(baseURI.pathname === '/' ? '/page/home.html' : baseURI.pathname)
        let contentType = mimes[path.extname(filePath)];

        fileAccess(filePath)
                  .then(fileReader)
                  .then(content=>{
                     res.writeHead(200,{'Content-Type':contentType});
                     res.end(content,'utf-8')
                  })
                  .catch(error=>{
                    res.writeHead(404);
                    res.end(JSON.stringify(error))
                    console.log(error)
                  });

    }



    
    

    http.createServer(webServer).listen(3000,()=>{
console.log("Server Runnning on Port 3000")});

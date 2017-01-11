
'use strict'

    const http = require('http')

    http.
        createServer((req,res)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end("<h1> Fire with node</h1>");
        }).listen(3000,()=>{console.log("Server is running on Port 3000")})

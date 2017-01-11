
'use strict';
    
    const http = require('http')
    const url = require('url')
    
    let routes ={
        'GET':{
            '/':(req,res)=>{
                res.writeHead(200,{'Content-Type':'text/html'})
                res.end("<h1>Home Page</h1>");
            },
            '/api/getData':(req,res)=>{
                res.writeHead(200,{'Content-Type':'application/json'})
                res.end(JSON.stringify(req.data))
             },
             '/about':(req,res)=>{
                 res.writeHead(200,{'Content-Type':'text/html'})
                 res.end("<h1>We are at About Page</h1>")
             }
        },
        'POST':{

        },
        '404':(req,res)=>{
            res.writeHead(404)
            res.end("It look like you are at wrong place");
        }
    }

    function router(req,res){
        let baseURL = url.parse(req.url,true)
        let routeResolver = routes[req.method][baseURL.pathname]

        if (routeResolver != undefined){
            req.data = baseURL.query
            routeResolver(req,res)
        }
        else{
            routes['404'](req,res) 
        }
    }

    http.createServer(router).listen(3000,()=>{
        console.log("Server Runnning on Port 3000");
    })

// run: node server.js on terminal

var https = require('http')

var url = require('url')

https.createServer(function(req,res)
{
    var route = req.url
    if(route === '/')
    {
        res.end("this is home page")
    }
    console.log("Server is running on port 3000")   
}).listen(5000)
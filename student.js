const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')

    if(req.url==='/'){
        res.write('<form method="post"action="/message"><input type="text"name="message"/><button type="submit">Add</button></form>')
        res.end()
    }
    else if(req.url==='/message'){
        console.log(req.body)
        res.write(req.body)
        res.end()
    }
})


server.listen(3000)
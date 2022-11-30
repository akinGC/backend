const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('server running')
    res.setHeader('Content-Type','text/html')

    res.write('<h1>tony stark</h1>')
    res.end()


})
server.listen(3000)


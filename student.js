const http = require('http')
const fs = require('fs')


const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    console.log('server started!')
    switch (req.url) {
        case '/home':
            res.write('<h1>Welcome 2 <span style={{color:`red`}}>Home</span> Page!</h1>')
            break;
        case '/contact':
            res.write('<h1>Welcome 2 <span style={{color:`red`}}>Contact</span> Page!</h1>')
            break;
        case '/content':
            res.write('<h1>Welcome 2 <span style={{color:`red`}}>Content</span> Page!</h1>')
            break;
        default:
            break;
    }
    res.end()
})


server.listen(3000)
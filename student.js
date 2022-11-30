const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.setHeader('Content-Type','text/html')
    switch (req.url) {
        case '/home':
            res.write('Welcome to Home page')
            break;
        case '/about':
            res.write('Welcome to About page')
            break;
        case '/node':
            res.write('Welcome to Node page')
            break;
        default:
            break;
    }
    res.end()


})
server.listen(3000)


const http = require('http')
const express = require('express')

const app = express()

app.use((req, res, next)=>{
    console.log('frst')
    res.write('first')
    res.end()
    next()
})
app.use((req, res, next)=>{
    console.log('scnd')
})
const server = http.createServer(app)

server.listen(3000)
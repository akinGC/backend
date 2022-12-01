
const express = require('express')
const body = require('body-parser')
const app = express()

app.use(body.urlencoded({extended:false}))
app.use('/product',(req, res, next)=>{
    res.setHeader('Content-Type','text/html')
    
    res.write('<form action=`/reply`method=`POST`><input name=`details`type=`text`/>')
    res.write('<br/><br/>')
    res.write('<input name=`color`type=`text`/><button type=`submit` >submit</button>')
    res.write('</form>')
    res.end()
})
app.use('/reply',(req, res, next)=>{
   console.log('hai')
    console.log(req.body)
    res.redirect('/')
    
   
   
})
app.use('/',(req, res, next)=>{
    res.send('hai there in mode!')
    
})


app.listen(3000)
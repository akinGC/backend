const express = require('express')
const path = require('path')
const app = express()

const shop = require('./routes/shop.js')
const admin = require('./routes/admin.js')
app.use(express.urlencoded({extended:false}))
// app.use(express.json())
app.use('/admin',admin)
// app.use(shop)
app.use('/shop',shop)

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000)
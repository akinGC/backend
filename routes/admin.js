const express = require('express')
const route = express.Router()
const fs = require('fs')

route.use('/hit',(req, res, next)=>{
    res.send('<form action="/shop/rehit" method="POST"><input name="tom"/><button type="submit">Add</button></form>')
})




module.exports = route
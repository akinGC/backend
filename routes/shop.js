const express = require('express')
const route = express.Router()
const fs = require('fs')

route.use('/rehit',(req, res, next)=>{
   
    let arr = []
    const fileData = JSON.parse(fs.readFileSync('sample.json'))


fileData.forEach(element => {
    arr.push(element)
});
let jsn={
    "tom":req.body.tom
}
arr.push(jsn)

    fs.writeFile("sample.json",JSON.stringify(arr), (err) => {
        if (err)
          console.log(err);
      });
      let arr2 = []
      const fileData2 = JSON.parse(fs.readFileSync('sample.json'))
  
  
  fileData2.forEach(element => {
      arr2.push(element)
  });
  let jsn2={
      "tom":req.body.tom
  }
  arr2.push(jsn2)
    res.setHeader('Content-Type','text/html')
    res.write('<form action="/shop/rehit" method="POST"><input name="tom"/><button type="submit">Add</button></form>')

    
     
    arr2.forEach(element => {
        res.write('<ul>')
            res.write(`<li>${element.tom}</li>`)
           
            res.write('</ul>')
    });
   
    res.end()
})

module.exports = route
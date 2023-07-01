const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('public'))
app.listen(3000,()=> console.log('servidor 3000 funcionando'))

app.get('/', (req,res)=> {
        res.sendFile(path.join(__dirname,'/views/index.html'))
} )

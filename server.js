const express = require('express')
const app = express()

app.use((req,res)=>res.status(404).json({msg:'path not found'}))

const port = 8000
app.listen(port, ()=>console.log('Server on',port))
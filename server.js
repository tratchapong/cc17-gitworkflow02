const express = require('express')
const app = express()

app.use('/register', (req,res)=>{
	res.json({msg: 'Register...'})
})
app.use('/login', (req, res) => {
	res.json({msg: 'Login...'})
})

app.use((req,res)=>res.status(404).json({msg:'path not found'}))


const port = 8000
app.listen(port, ()=>console.log('Server on',port))
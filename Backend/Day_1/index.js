require('dotenv').config()
const express = require('express');
const app = express();
// const port = 3000;  We'll use PORT variable from env file
app.get('/',(req , res)=>{
    res.send("Hello World")
})

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})
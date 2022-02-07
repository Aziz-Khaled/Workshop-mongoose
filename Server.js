const express = require('express');
const connectDb = require('./Config/connectDb');
require ('dotenv').config ()
const route = require('./Routes/contactRoute')

const app = express()
connectDb ()
app.use (express.json() )
app.use ('/api/contact' ,route)

const PORT = 6500 ; 

app.listen (PORT , (err) => 
err ? console.log (err) : console.log (`the app is running on port : ${PORT}`))


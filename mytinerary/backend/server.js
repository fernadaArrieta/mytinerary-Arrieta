require('dotenv').config()
const express= require('express')
require('./config/database')
const PORT= 4000

const app= express()

app.listen(PORT,()=>console.log ('Server ready on PORT'+PORT))


require('dotenv').config()
const cors = require('cors')
const express= require('express')
require('./config/database')
const Router = require('./routes/routes')
const RouterTinerary = require('./routes/routestinerary')
const PORT= 4000


const app= express()

//middlewares
app.use(cors())
app.use(express.json())
app.use('/api', Router)
app.use('/api/v1', RouterTinerary)

app.listen(PORT,()=>console.log ('Server ready on PORT'+PORT))


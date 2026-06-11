const mongoose = require ('mongoose')

mongoose.connect (process.env.MONGO_URI)
.then(()=>console.log ("Database conected"))
.catch(err => console.error(err))


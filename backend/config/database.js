const mongoose = require ('mongoose')

mongoose.connect (process.env.MONGO_URI, {

    UseUnifiedTopology: true,
    UseNewUrlParser: true,
})
.then(()=>console.log ("Database conected"))
.catch(err => console.error(err))


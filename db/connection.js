const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/app_produtos').then(() => {
    console.log("Database connected successfully!")
}).catch((error) => {
    console.log(error)
})
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
require("dotenv").config()
require("sass")

const homeController = require("./controllers/homeController")

app.set('view engine', 'ejs')
app.use(express.static("assets"))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/", homeController)

const port = process.env.PORT
app.listen(port || 4040, console.log(`Server running in http://localhost:${port}`))
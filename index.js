const express = require("express")
const app = express()
const bodyParser = require("body-parser")
require("dotenv").config()

const homeController = require("./controllers/homeController")
const produtosController = require("./controllers/produtosController")
const adminController = require("./controllers/adminController")
const detalhesController = require("./controllers/detalhesController")
const alterarController = require("./controllers/alterarController")

app.set('view engine', 'ejs')
app.use(express.static("assets"))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/", homeController)
app.post("/novoproduto", produtosController)
app.get("/admin", adminController)
app.post("/details", detalhesController)
app.post("/alterar", alterarController)
app.post("/alterarproduto", produtosController)
app.post("/delete", produtosController)

const port = process.env.PORT
app.listen(port || 4040, console.log(`Server running in http://localhost:${port}`))
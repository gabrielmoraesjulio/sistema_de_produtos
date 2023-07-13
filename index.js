const express = require("express")
const app = express()
const bodyParser = require("body-parser")
require("dotenv").config()

const produtosModel = require("./models/Produtos")


app.set('view engine', 'ejs')
app.use(express.static("assets"))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/", async (req, res) => {

    const produtos = await produtosModel.find({})
    res.render("index", {
        acharProdutos: produtos
    })
})

const port = process.env.PORT
app.listen(port || 4040, console.log(`Server running in http://localhost:${port}`))
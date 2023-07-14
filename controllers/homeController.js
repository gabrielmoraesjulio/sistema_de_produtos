const express = require("express")
const router = express.Router()

const produtosModel = require("../models/Produtos")

router.get("/", async (req, res) => {

    const produtos = await produtosModel.find({})
    res.render("index", {
        acharProdutos: produtos
    })
})

module.exports = router;
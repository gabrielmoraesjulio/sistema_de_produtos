const express = require("express")
const router = express.Router()

const produtosModel = require("../models/Produtos")

router.get("/", async (req, res) => {
    const paginaNav = 0

    const produtos = await produtosModel.find({})
    
    res.render("index", {
        acharProdutos: produtos,
        paginaNav: paginaNav,
    })
    
})

module.exports = router;
const express = require("express")
const router = express.Router()
const moment = require("moment")

const produtosModel = require("../models/Produtos")

router.get("/", async (req, res) => {

    const paginaNav = 0
    let dataProduto = moment().add(1, 'days').format("DD/MM/YYYY")

    const produtos = await produtosModel.find({})
    const vencendo = await produtosModel.find({
        validadeProduto: dataProduto
    })
    
    res.render("index", {
        acharProdutos: produtos,
        paginaNav: paginaNav,
        produtosVencendo: vencendo 
    })
    
})

module.exports = router;
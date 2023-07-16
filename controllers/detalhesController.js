const express = require("express")
const router = express.Router()

const produtosModel = require("../models/Produtos")

router.post("/details", async (req, res) => {
    const paginaNav = 1
    
    const detalheProduto = await produtosModel.find({
        _id: req.body.idProduto
    })

    res.render("detalheProduto", {
        detalheProdutoVar: detalheProduto,
        paginaNav: paginaNav
    })
})

module.exports = router;
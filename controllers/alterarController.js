const express = require("express")
const router = express.Router()

const produtosModel = require("../models/Produtos")

router.post("/alterar", async (req, res) => {
    const paginaNav = 1
    const linkButton = "alterar"
    const detalheProduto = await produtosModel.find({
        _id: req.body.idProduto
    })

    res.render("infoProduto", {
        detalheProdutoVar: detalheProduto,
        paginaNav: paginaNav,
        linkButton: linkButton
    })
})

module.exports = router;
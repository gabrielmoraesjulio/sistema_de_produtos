const express = require("express")
const router = express.Router()

const produtosModel = require("../models/Produtos")

router.post("/details", async (req, res) => {
    const paginaNav = 1
    const linkButton = "detalhes"
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
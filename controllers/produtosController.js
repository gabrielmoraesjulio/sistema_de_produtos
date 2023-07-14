const express = require("express")
const router = express.Router()
const produtosModel = require("../models/Produtos")
const upload = require("../config/multer")

router.post("/novoproduto", upload.single('imagemProduto'), async (req, res) => {
    await produtosModel.insertMany([{
        nomeProduto: req.body.nomeProduto,
        marcaProduto: req.body.marcaProduto,
        pesoProduto: req.body.pesoProduto,
        linhaProduto: req.body.linhaProduto,
        precoProduto: req.body.precoProduto,
        validadeProduto: req.body.validadeProduto,
        imagemProduto: req.file.filename
    }])
})

module.exports = router;
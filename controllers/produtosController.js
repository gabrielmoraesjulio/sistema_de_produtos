const express = require("express")
const router = express.Router()
const produtosModel = require("../models/Produtos")
const upload = require("../config/multer")
const fs = require("fs")
const path = require("path")

router.post("/novoproduto", upload.single('imagemProduto'), async (req, res) => {
    await produtosModel.insertMany([{
        nomeProduto: req.body.nomeProduto,
        marcaProduto: req.body.marcaProduto,
        pesoProduto: req.body.pesoProduto,
        linhaProduto: req.body.linhaProduto,
        precoProduto: req.body.precoProduto,
        validadeProduto: req.body.validadeProduto,
        disponivelProduto: req.body.disponivelProduto,
        quantidadeProduto: req.body.quantidadeProduto,
        imagemProduto: req.file.filename
    }])

    res.redirect("/")
})

router.post("/alterarproduto", async (req, res) => {
    await produtosModel.updateOne({_id: req.body.idProduto}, {
        nomeProduto: req.body.alterarNomeProd,
        marcaProduto: req.body.alterarMarcaProd,
        pesoProduto: req.body.alterarPesoProd,
        linhaProduto: req.body.alterarLinhaProd,
        precoProduto: req.body.alterarPrecoProd,
        validadeProduto: req.body.alterarValidadeProd,
        disponivelProduto: req.body.alterarDisponivelProd,
        quantidadeProduto: req.body.alterarQuantidadeProd,
    })
    res.redirect("/")
})

router.post("/delete", async (req, res) => {
    await produtosModel.deleteOne({_id: {$gte: req.body.idProduto}})

    let fspath = (path.join(`assets/img/${req.body.deletarImagem}`))
    fs.unlinkSync(fspath)

    res.redirect("/")
})

module.exports = router;
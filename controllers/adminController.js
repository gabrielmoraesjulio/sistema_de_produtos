const express = require("express")
const router = express.Router()

router.get("/admin", async (req, res) => {

    const paginaNav = 1

    res.render("admin", {
        paginaNav: paginaNav
    })
    
})

module.exports = router;
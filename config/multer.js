const multer = require("multer")

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        let nomeImagem = Date.now()+"-"+file.originalname 
        cb(null, nomeImagem)
    },
    destination: (req, file, cb) => {
        let path = "./assets/img"
        cb(null, path)
    }
})

const upload = multer({storage})

module.exports = upload;
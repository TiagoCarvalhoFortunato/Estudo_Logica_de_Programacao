const express = require("express")
const router = express.Router()

const dbKnex = require("./data/db_config")

//método get é usado para consulta
router.get("/", async (req, res) => {
    try {
        const livros = await dbKnex("livors").orderBy("id", "desc")
        res.status(200).json(livros)
    }catch (error) {
        res.status(400).json({ msg: error.message })
    }
})

module.exports = router
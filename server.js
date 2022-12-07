const express = require("express")
const cors = require("cors")
const produto = require('./config')
const app = express()

app.use(express.json())
app.use(cors())

app.post("/create", async(req, res) => {
    const data = req.body
    console.log("Dados do profuto: ", data)
    res.send({msg: "Produto inserido"})
})

app.listen(process.env.PORT || 8080, () =>  console.log("Servidor rodando"))

const {addDoc, deleteDoc, getDocs, collection, getDoc, doc, updateDoc} = require('firebase/firestore')
const express = require('express')
const cors = require('cors')
const {produtosCol, receitasCol, db} = require('./config')
const bodyparser = require('body-parser')
const app = express()

app.use(bodyparser.urlencoded({ extended : true}));
app.use(cors())

app.get("/", (req,res)=> {
    res.send("Bem vindo!")
})

app.get("/produtos", async(req, res) => {
    const produtosSnapshot = await getDocs(produtosCol);
    const produtosList = produtosSnapshot.docs.map(doc => doc.data());
    res.send(produtosList)
})

app.get("/produto/:id", async (req, res) => {
    const docRef = doc(db, "produtos", req.params.id);
    try {
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
            console.log(docSnap.data());
        } else {
            console.log("Document does not exist")
        }

        res.send(docSnap.data())

    } catch(error) {
        console.log(error)
        res.send({msg: 'error'})
    }
})

app.post("/produto/inserir", async(req, res) => {
    const data =  req.body
    await addDoc(produtosCol, data)
    res.send({msg: "Produto inserido"})
})

app.put("/produto/alterar", async(req, res) => {
    const data =  req.body
    const docRef = doc(db, "produtos", req.params.id);

    updateDoc(docRef, data)

    res.send({msg: "Produto alterado"})
})

app.delete("/produto/remover/:id", async(req, res) => {
    const data =  req.body
    const docRef = doc(db, 'produtos', req.params.id)
    
    deleteDoc(docRef)

    res.send({msg: "Produto removido"})
})

// -----------------------------------------------------------------------
// RECEITA
// ----------------------------------------------------------------------

app.get("/receitas", async(req, res) => {
    const receitasSnapshot = await getDocs(receitasCol);
    const receitasList = receitasSnapshot.docs.map(doc => doc.data());
    res.send(receitasList)
})

app.get("/receita/:id", async (req, res) => {
    const docRef = doc(db, "produtos", req.params.id);
    try {
        const docSnap = await getDoc(docRef);
        
        if(docSnap.exists()) {
            console.log(docSnap.data());
        } else {
            console.log("Document does not exist")
        }

        res.send(docSnap.data())
        
    } catch(error) {
        console.log(error)
        res.send({msg: 'error'})
    }
})

app.post("/receita/inserir", async(req, res) => {
    const data =  req.body
    await addDoc(produtosCol, data)
    res.send({msg: "Produto inserido"})
})


app.put("/receita/alterar/:id", async(req, res) => {
    const data =  req.body
    const docRef = doc(db, "receitas", data.params.id);

    updateDoc(docRef, data)

    res.send({msg: "Receita alterada"})
})

app.delete("/receita/remover/:id", async(req, res) => {
    const data =  req.body
    const docRef = doc(db, 'receitas', req.params.id)
    
    deleteDoc(docRef)

    res.send({msg: "Receita removida"})
})



app.listen(process.env.PORT || 8080, () =>  console.log("Servidor rodando"))

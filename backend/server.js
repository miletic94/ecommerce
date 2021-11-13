import express from "express"
import { data } from "./data.js"

const app = express()

app.get("/", (req, res) => {
    res.send("Server is ready")
})

app.get("/api/products", (req, res) => {
    res.send(data)
})

app.get("/api/products/:id", (req, res) => {
    const product = data.find(item => item.id.toString() === req.params.id)
    if(product) {
        res.send(product)
    } else {
        res.status(404).send({message: "Product is Not Found"})
    }
})

const port = process.env.PORT || 5000
app.listen(5000, () => {
    console.log(`Server started at port ${port}`)
})
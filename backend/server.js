const express = require("express")
const path = require("path")
require("path")
let data = require("./data/data.js")

const app = express()
app.use(express.json())

// app.get("/", (req, res) => {
//     res.send("Server is ready")
// })

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

// // all your routes should go here
// app.use('/some-route', require(path.join(__dirname, 'api', 'routes', 'route.js')))

// static files (build of your frontend)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend', 'build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
  })
}


const port = process.env.PORT || 5000
app.listen(5000, () => {
    console.log(`Server started at port ${port}`)
})
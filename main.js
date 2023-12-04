//Proyecto de clientes 
const express = require('express')
const app = express()

// app.get("/", (req, res) => {
//     res.send("Mi ruta principal")
// });

app.get("/", (req, res) => {
    res.sendFile("main.html")
})


app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"))
const express = require('express')
const cors = require('cors')
// const { MongoClient } = require('mongodb');
const coord = require('./Route/coordenadas')
const app = express()
const PORT = process.env.PORT || 8080;

app.use(cors())
app.use(express.json())

app.use(coord)

app.listen(PORT, () => {
    console.log(`localhost:${PORT}`)
})

//mongodb+srv://fagion:dbS$nh0@cluster0.cmszd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
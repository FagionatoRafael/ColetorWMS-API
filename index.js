const express = require('express')
const cors = require('cors')
const coord = require('./Route/coordenadas')
const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())

app.use(coord)

app.listen(PORT, () => {
    console.log(`localhost:${PORT}`)
})
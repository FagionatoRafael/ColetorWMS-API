const express = require('express')

const app = express()

app.route('/coord')
    .get((req, res) => {
        res.send('alo')
    })
    .post((req, res) => {
        const coords = req.body
        console.log(coords)
        res.json(coords)
    })

module.exports = app
const express = require('express')
const {insertCollection, findAllCollection, deleteCollection} = require('../controller/coordenadasController')

const app = express()

app.route('/coord')
    .get((req, res) => {
        const result = findAllCollection()
        result.then((r) => res.json(r))
    })
    .post((req, res) => {
        const coords = req.body
        const result = insertCollection(coords)
        result.then((r) => res.json(r))
        // res.json(coords)
    })
    .delete((req, res) => {
        const id = req.body
        const result = deleteCollection(id)
        result.then((r) => res.json(r))
    })

module.exports = app
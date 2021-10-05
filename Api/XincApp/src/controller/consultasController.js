const express = require('express')
const consultas = require('../services/consultasData.svc.js')
const routes = express.Router()


routes.get('/user/:idUser/animals', (req, res) => {
    var user_id = req.params['idUser']

    consultas.searchAnimalByUser(user_id).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})


module.exports = routes
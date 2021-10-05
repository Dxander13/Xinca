const express = require('express')
const svcLogin = require('../services/login.svc.js')
const routes = express.Router()

routes.get('/inicio', (req, res) => {
    res.send(svcLogin.imprimir("Cristhofer"))
})

module.exports = routes
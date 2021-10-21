const express = require('express')
const insertData = require('../services/InsertData.svc.js')
const routes = express.Router()

routes.post('/registro/palabra-usuario', (req, res) => {
    let registroPalabra = req.body;
    console.log(registroPalabra)
    insertData.insertPalabraUsuario(registroPalabra).then(function(result) {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error);
    })
})

routes.post('/usuario', (req, res) => {
    let user = req.body;
    console.log(user)
    insertData.insertUser(user).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})

routes.put('/editarPerfil', (req, res) => {
    let perfil = req.body;

    console.log('Informacion del perfil',perfil)
    insertData.actualizaPerfil(perfil).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})





routes.post('/natality', (req, res) => {
    let natality = req.body;
    console.log(natality)
    insertData.insertNatality(natality).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})

routes.post('/insemination', (req, res) => {
    let insemination = req.body;
    console.log(insemination)
    insertData.insertInsemination(insemination).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})

routes.post('/healthControl', (req, res) => {
    let healthControl = req.body;
    console.log(healthControl)
    insertData.insertHealthControl(healthControl).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})



module.exports = routes
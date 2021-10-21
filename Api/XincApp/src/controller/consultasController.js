const express = require('express')
const consultas = require('../services/consultasData.svc.js')
const routes = express.Router()


routes.get('/register/usuario/:idUsuario/palabra/:idPalabra', (req, res) => {
    var user_id = req.params['idUsuario']
    var idPalabra = req.params['idPalabra']

    consultas.registroPalabra(user_id,idPalabra).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})




routes.get('/usuario/:idUsuario/palabras-aprendidas', (req, res) => {
    var user_id = req.params['idUsuario']
   

    consultas.registroPalabraAprendida(user_id).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})

routes.get('/usuario/:idUsuario/palabras-aprender', (req, res) => {
    var user_id = req.params['idUsuario']
   

    consultas.registroPalabraAprender(user_id).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})

routes.get('/logeo/:idUsuario/:contrasena', (req, res) => {
    var user_id = req.params['idUsuario']
    var contrasena = req.params['contrasena']

    consultas.registroLogin(user_id,contrasena).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})

routes.put('/usuario/:idUsuario/experiencia/:experiencia', (req, res) => {
    var user_id = req.params['idUsuario']
    var experiencia= req.params['experiencia']
    
    consultas.registroExperiencia(user_id,experiencia).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})


routes.put('/usuario/:idUsuario/categoria/:idCategoria', (req, res) => {
    var user_id = req.params['idUsuario']
    var categoria_id= req.params['idCategoria']
    
    consultas.registroCategoria(user_id,categoria_id).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})

routes.get('/usuario/verificar-categoria/:idCategoria', (req, res) => {    
    var categoria_id= req.params['idCategoria']
    
    consultas.registroActualizarCategoria(categoria_id).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})
routes.get('/usuarios', (req, res) => {    
    
    
    consultas.getUsuarios().then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})



routes.get('/usuario/:idUsuario/grupo/:idGrupo', (req, res) => {
    var user_id = req.params['idUsuario']
    var grupo_id = req.params['idGrupo']
   

    consultas.registroPalabraAprendidaGrupo(user_id, grupo_id).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})


routes.get('/grupo/:idGrupo/palabras', (req, res) => {
    
    var grupo_id = req.params['idGrupo']
   

    consultas.registroPalabrasGrupo( grupo_id).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})



routes.get('/perfil/:idPerfil', (req, res) => {
    
    var perfil_id = req.params['idPerfil']
   

    consultas.consultarPerfil( perfil_id).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})



module.exports = routes
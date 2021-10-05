const conection = require('../settings/mysql.conector.js')

function imprimir(n) {
    conection.conection()
    return "Hola " + n
}


module.exports = { imprimir }
const query = require('../dao/querys.consultas')


function registroPalabra(idUser,idPalabra) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.registroPalabra(idUser,idPalabra)
        console.log(result.length)
        try {
            if (result) {
                mr = { state: 200, data: result.length, message: "SUCCES" };
            } else {
                mr = {
                    state: 204,
                    data: "No hay un registro para la palabra",
                    messag: "SUCCES",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}

function registroPalabraAprendida(idUser) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.registroPalabraAprendida(idUser)
        console.log(result.length)
        try {
            if (result.length>0) {
                mr = { state: 200, data: result, message: "SUCCES" };
            } else {
                mr = {
                    state: 204,
                    data: "No hay un registro para la palabra",
                    messag: "SUCCES",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}

function registroPalabraAprender(idUser) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.registroPalabraAprender(idUser)
        console.log(result.length)
        try {
            if (result.length>0) {
                mr = { state: 200, data: result, message: "SUCCES" };
            } else {
                mr = {
                    state: 204,
                    data: "No hay un registro para la palabra",
                    messag: "SUCCES",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}

function registroLogin(idUser, Contraseña) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.registroLogin(idUser, Contraseña)
        console.log(result.length)
        try {
            if (result.length>0) {
                mr = { state: 200, data: result, message: "SUCCES" };
            } else {
                mr = {
                    state: 204,
                    data: "No hay un registro para la palabra",
                    messag: "SUCCES",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}


function registroExperiencia(idUser, Experiencia) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.registroExperiencia(idUser, Experiencia)
        console.log(result.length)
        try {
            if (result) {
                mr = { state: 200, data: result.message, message: "SUCCES" };
            } else {
                mr = {
                    state: 204,
                    data: "No hay usuario para actualizar",
                    messag: "SUCCES",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}

function registroCategoria(idUser, idCategoria) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.registroCategoria(idUser, idCategoria)
        console.log(result.length)
        try {
            if (result) {
                mr = { state: 200, data: result.message, message: "SUCCES" };
            } else {
                mr = {
                    state: 204,
                    data: "Categoria del usuario actualizada",
                    messag: "SUCCES",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}


function registroActualizarCategoria(idCategoria) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.registroActualizarCategoria(idCategoria)
        console.log(result.length)
        try {
            if (result.length>0) {
                mr = { state: 200, data: result, message: "SUCCES" };
            } else {
                mr = {
                    state: 204,
                    data: "No existe esa categoria.",
                    messag: "SUCCES",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}





module.exports = { 
    registroPalabra,
    registroPalabraAprendida,
    registroPalabraAprender,
    registroLogin,
    registroExperiencia,
    registroCategoria,
    registroActualizarCategoria
}

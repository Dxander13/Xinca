const log4js = require("log4js");
const query = require("../dao/querys.insert.js");


function insertPalabraUsuario(objectRegister) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.registroPalabra(objectRegister);

        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Palabra registrada", idPalabraRegistrada: result }], message: "SUCCES" };;
            } else {
                mr = {
                    state: -1,
                    data: "No se pudo insertar en la base de datos",
                    messag: "ERROR",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: -1, message: new String(error) });
        }



    });
}

function insertUser(objectUser) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.registerUser(objectUser);
        console.log
        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Usuario creado", idUsuario: result }], message: "SUCCES" };
            } else {
                mr = {
                    state: -1,
                    data: "No se pudo crear el usurio",
                    messag: "ERROR",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: -1, message: new String(error) });
        }



    });
}

function actualizaPerfil(objectPerfil) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.actualizarPerfil(objectPerfil);
        console.log
        try {
            if (result) {
                mr = { state: 200, data: result, message: "SUCCES" };
            } else {
                mr = {
                    state: -1,
                    data: "No se pudo crear el usurio",
                    messag: "ERROR",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: -1, message: new String(error) });
        }



    });
}



module.exports = { 
    insertPalabraUsuario, 
    insertUser,
    actualizaPerfil

    };
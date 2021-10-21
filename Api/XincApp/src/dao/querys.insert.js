const { query } = require("express");
const { conector } = require("../settings/mysql.conector.js");


const registroPalabra = (registroPalabra) => {

    const sqlInsertRegistroPalabra = `INSERT INTO xincadb.registro SET ?`;
    return new Promise((resolve, reject) => {
        conector.query(sqlInsertRegistroPalabra, registroPalabra, (erro, resul) => {
            if (erro) reject(erro)
            else resolve(resul.insertId)
        });
    })
};

const registerUser = (user) => {
    let IdUsuario;
 console.log('entro a la query')
    const sqlInsertUserRegister = `INSERT INTO xincadb.usuario
            (NombreUsuario, Contrasena)
            VALUES("${user.nombreUsuario}", "${user.contrasena}");`;   

    return new Promise((resolve, reject) => {
        conector.query(sqlInsertUserRegister, (err, result) => {
            console.log(result)
            IdUsuario = result.insertId
            const sqlInsertPerfil = `INSERT INTO xincadb.perfil
    (Nickname, Contrasena, Experiencia, Celular, Correo, IdCategoria, IdUsuario)
    VALUES("${user.nickname}", "${user.contrasena}", ${user.experiencia}, ${user.celular}, "${user.correo}", ${user.IdCategoria}, ${IdUsuario});`;
            conector.query(sqlInsertPerfil, (err, resul) => {
               console.log(err)
               console.log(resul)
                if (err) reject(err);
                else resolve(resul.insertId)
            });
        });
    })

};

const actualizarPerfil = (perfilAct) => {
    const queryUpdatePerfil = 'UPDATE xincadb.perfil SET Nickname= ?, Contrasena= ?, Celular= ?, Correo= ? where IdPerfil= ?;';
    return new Promise((resolve, reject)=>{
        conector.query(queryUpdatePerfil,[perfilAct.nickname, perfilAct.contrasena, +perfilAct.celular, perfilAct.correo, +perfilAct.idPerfil],(error,result)=>{
            console.log(result)
            console.log(error)
            if(error) reject(error)
            else resolve(result)
        })
    })
}

module.exports = {
    registroPalabra,
    registerUser,
    actualizarPerfil
   
};
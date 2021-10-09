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
            (NombreUsuario, Contraseña)
            VALUES("${user.nombreUsuario}", "${user.contraseña}");`;   

    return new Promise((resolve, reject) => {
        conector.query(sqlInsertUserRegister, (err, result) => {
            console.log(result)
            IdUsuario = result.insertId
            const sqlInsertPerfil = `INSERT INTO xincadb.perfil
    (Nickname, Experiencia, Celular, Correo, IdCategoria, IdUsuario)
    VALUES("${user.nickname}", ${user.experiencia}, ${user.celular}, "${user.correo}", ${user.IdCategoria}, ${IdUsuario});`;
            conector.query(sqlInsertPerfil, (err, resul) => {
               
                if (err) reject(err);
                else resolve(resul.insertId)
            });
        });
    })

};

const registerMilk = (milk) => {

    const sqlInsertMilkRegister = `INSERT INTO controlganadero.producciondiaria SET ?`;
    return new Promise((resolve, reject) => {
        conector.query(sqlInsertMilkRegister, milk, (err, result) => {
            if (err) reject(err)
            else resolve(result.insertId)
        });
    })

};

const registerNatality = (natality) => {

    const sqlInsertNatalityRegister = `INSERT INTO controlganadero.natalidad SET ?;`;
    return new Promise((resolve, reject) => {
        conector.query(sqlInsertNatalityRegister, natality, (err, result) => {
            if (err) reject(err)
            else resolve(result.insertId)
        });
    })
};

const registerInsemination = (insemination) => {


    const sqlInsertInseminationRegister = `INSERT INTO controlganadero.inseminacion
    SET ?`;
    return new Promise((resolve, reject) => {
        conector.query(sqlInsertInseminationRegister, insemination, (err, result) => {
            if (err) reject(err)
            else resolve(result.insertId)
        });
    })



};

const registerhealthcontrol = (health) => {

    const sqlInsertHealthRegister = `INSERT INTO controlganadero.controlsalud SET ?`;
    return new Promise((resolve, reject) => {
        conector.query(sqlInsertHealthRegister, health, (err, result) => {
            if (err) reject(err)
            else resolve(result.insertId)
        });
    })

};

module.exports = {
    registroPalabra,
    registerUser,
    registerMilk,
    registerNatality,
    registerInsemination,
    registerhealthcontrol
};
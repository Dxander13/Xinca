const { query } = require("express");
const { conector } = require("../settings/mysql.conector.js");



const searchAnimalByUser = (idUser) => {
    const sqlSearchAnimals = `select r.* from controlganadero.usuarios  u 
    inner join controlganadero.registroanimal r  on u.idUsuario = r.idUsuario 
    where u.idUsuario= ${idUser}`;

    return new Promise((resolve, reject) => {
        conector.query(sqlSearchAnimals, (erro, resul) => {
            if (erro) reject(erro)
            else resolve(resul)
        });
    })
}

const searchInformationAnimaNatality = (idUser, idAnimal, limit) => {
    const sqlSearchNatalityInfo = `select n.* from controlganadero.registroanimal r
    inner join controlganadero.natalidad n on n.idAnimal = r.idAnimal 
    where r.idUsuario =${idUser} and r.idAnimal =${idAnimal} 
    order by n.idNatalidad desc
    limit ${limit};
    `;

    return new Promise((resolve, reject) => {
        conector.query(sqlSearchNatalityInfo, (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    })
}

const searchInformationAnimalInsemination = (idUser, idAnimal, limit) => {
    const sqlInformationAnimalInsemination = `select   i.* from controlganadero.registroanimal r
    inner join controlganadero.inseminacion i on i.idAnimal = r.idAnimal 
    where r.idUsuario =${idUser} and r.idAnimal =${idAnimal} 
    order by i.idInseminacion desc
    limit ${limit};`;

    return new Promise((resolve, reject) => {
        conector.query(sqlInformationAnimalInsemination, (erro, result) => {
            if (erro) reject(erro)
            else resolve(result)
        })
    })
}

const searchInformationAnimalControlSalud = (idUser, idAnimal, limit) => {
    const sqlInformationAnimalControlSalud = `select   i.* from controlganadero.registroanimal r
    inner join controlganadero.inseminacion i on i.idAnimal = r.idAnimal 
    where r.idUsuario =${idUser} and r.idAnimal =${idAnimal} 
    order by i.idInseminacion desc
    limit ${limit};`;

    return new Promise((resolve, reject) => {
        conector.query(sqlInformationAnimalControlSalud, (err, resul) => {
            if (err) reject(err)
            else resolve(resul)
        })
    })
}


module.exports = {
    searchAnimalByUser,
    searchInformationAnimaNatality,
    searchInformationAnimalInsemination,
    searchInformationAnimalControlSalud
}
const { query } = require("express");
const { conector } = require("../settings/mysql.conector.js");



const registroPalabra = (idUser,idPalabra) => {
    const sqlRegistroPalabra = `select * from xincadb.registro  r 
     where r.IdPerfil = ${idUser} and r.IdPalabra =${idPalabra} and r.Estado =1`;

    return new Promise((resolve, reject) => {
        conector.query(sqlRegistroPalabra, (erro, resul) => {
            if (erro) reject(erro)
            else resolve(resul)
        });
    })
}

const registroPalabraAprendida = (idUser) => {
    const sqlRegistroPalabraAprendida = `select p.*,g.* from xincadb.palabra p 
    inner join xincadb.registro r on r.IdPalabra = p.IdPalabra 
    inner join xincadb.grupopalabra g on g.IdGrupo  = r.IdGrupo 
    where r.Estado =1 and r.IdPerfil =${idUser} `;

    return new Promise((resolve, reject) => {
        conector.query(sqlRegistroPalabraAprendida, (erro, resul) => {
            if (erro) reject(erro)
            else resolve(resul)
        });
    })
}

const registroPalabraAprender = (idUser) => {
    const sqlRegistroPalabraAprender = `select DISTINCT p2.* from  xincadb.perfil p 
    inner join xincadb.grupopalabra g on g.IdCategoria = p.IdCategoria 
    inner join xincadb.palabra p2 on p2.IdGrupo = g.IdGrupo 
    where p.IdPerfil =${idUser} `;

    return new Promise((resolve, reject) => {
        conector.query(sqlRegistroPalabraAprender, (erro, resul) => {
            if (erro) reject(erro)
            else resolve(resul)
        });
    })
}

const registroLogin = (idUser,Contraseña) => {

    const sqlRegistroLogin = `select * from xincadb.perfil p 
    inner join xincadb.usuario u on u.IdUsuario = p.IdUsuario 
    where u.NombreUsuario ='${idUser}' and u.Contraseña='${Contraseña}' `;

    return new Promise((resolve, reject) => {
        conector.query(sqlRegistroLogin, (erro, resul) => {
            if (erro) reject(erro)
            else resolve(resul)
        });
    })
}

const registroExperiencia = (idUser,Experiencia) => {
    
    const sqlRegistroExperiencia = `UPDATE xincadb.perfil SET  Experiencia=${Experiencia} WHERE IdPerfil=${idUser} `;

    return new Promise((resolve, reject) => {
        conector.query(sqlRegistroExperiencia, (erro, resul) => {
            if (erro) reject(erro)
            else resolve(resul)
        });
    })
}

const registroCategoria = (idUser,idCategoria) => {
    
    const sqlRegistroCategoria= `UPDATE xincadb.perfil
    SET IdCategoria=${idCategoria} WHERE IdPerfil=${idUser} `;

    return new Promise((resolve, reject) => {
        conector.query(sqlRegistroCategoria, (erro, resul) => {
            if (erro) reject(erro)
            else resolve(resul)
        });
    })
}

const registroActualizarCategoria = (idCategoria) => {
    
    const sqlRegistroActualizarCategoria= `select * from xincadb.categoria c where c.IdCategoria = ${idCategoria}`;

    return new Promise((resolve, reject) => {
        conector.query(sqlRegistroActualizarCategoria, (erro, resul) => {
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
    registroPalabra,
    registroPalabraAprendida,
    registroPalabraAprender,
    registroLogin,
    registroExperiencia,
    registroCategoria,
    registroActualizarCategoria,
    searchInformationAnimaNatality,
    searchInformationAnimalInsemination,
    searchInformationAnimalControlSalud
}
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

const registroLogin = (idUser,contrasena) => {

    const sqlRegistroLogin = `select * from xincadb.perfil p 
    inner join xincadb.usuario u on u.IdUsuario = p.IdUsuario 
    where u.NombreUsuario ='${idUser}' and u.contrasena='${contrasena}' `;

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

const getUsuarios = () => {
    
    const sqlBuscarUsuarios= `select * from xincadb.perfil p2 ;`;

    return new Promise((resolve, reject) => {
        conector.query(sqlBuscarUsuarios, (erro, resul) => {
            if (erro) reject(erro)
            else resolve(resul)
        });
    })
}

const registroPalabraAprendidaGrupo = (idUser, idGrupo) => {
    const sqlRegistroPalabraAprendidaGrupo = `select p.*,g.* from xincadb.palabra p 
    inner join xincadb.registro r on r.IdPalabra = p.IdPalabra 
    inner join xincadb.grupopalabra g on g.IdGrupo  = r.IdGrupo 
    where r.Estado =1 and r.IdPerfil =${idUser} and g.idGrupo=${idGrupo}`;

    return new Promise((resolve, reject) => {
        conector.query(sqlRegistroPalabraAprendidaGrupo, (erro, resul) => {
            if (erro) reject(erro)
            else resolve(resul)
        });
    })
}

const registroPalabrasGrupo = (idGrupo) => {
    const sqlRegistroPalabrasGrupo = `select * from xincadb.grupopalabra g 
    inner join xincadb.palabra p on p.IdGrupo = g.IdGrupo
    where g.idGrupo=${idGrupo}`;

    return new Promise((resolve, reject) => {
        conector.query(sqlRegistroPalabrasGrupo, (erro, resul) => {
            if (erro) reject(erro)
            else resolve(resul)
        });
    })
}

const consultarPerfil = (idPerfil) => {
    const sqlConsultarPerfil = `select * from xincadb.perfil p 
    where p.idPerfil=${idPerfil}`;

    return new Promise((resolve, reject) => {
        conector.query(sqlConsultarPerfil, (erro, resul) => {
            if (erro) reject(erro)
            else resolve(resul)
        });
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
    getUsuarios,
    registroPalabraAprendidaGrupo,
    registroPalabrasGrupo,
    consultarPerfil
   
}
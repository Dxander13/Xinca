const log4js = require("log4js");
const query = require("../dao/querys.insert.js");


function insertAnimal(objectRegister) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.registerAnimal(objectRegister);

        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Animal Registrado", idAnimal: result }], message: "SUCCES" };;
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

function insertMilk(objectMilk) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.registerMilk(objectMilk);
        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Resgistro de Leche Creado", idProduccionLeche: result }], message: "SUCCES" };
            } else {
                mr = {
                    state: -1,
                    data: "No se pudo registrar",
                    messag: "ERROR",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: -1, message: new String(error) });
        }



    });
}

function insertNatality(objectNatality) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.registerNatality(objectNatality);
        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Natalidad Registrada", idNatalidad: result }], message: "SUCCES" };
            } else {
                mr = {
                    state: -1,
                    data: "No se pudo registrar la natalidad del animal",
                    messag: "ERROR",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: -1, message: new String(error) });
        }



    });
}

function insertInsemination(objectInsemination) {
    return new Promise(async(resolve, reject) => {
        console.log("Entro al segunda funcion")
        var mr;
        var result = await query.registerInsemination(objectInsemination);

        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Natalidad Registrada", idInseminacion: result }], message: "SUCCES" };
            } else {
                mr = {
                    state: -1,
                    data: "No se pudo registrar la inseminacion del animal",
                    messag: "ERROR",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: -1, message: new String(error) });
        }
    });
}

function insertHealthControl(objectHealth) {
    return new Promise(async(resolve, reject) => {

        var mr;
        var result = await query.registerhealthcontrol(objectHealth);

        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Control de salud registrado", idControlSalud: result }], message: "SUCCES" };
            } else {
                mr = {
                    state: -1,
                    data: "No se pudo registrar el control de salud del animal",
                    messag: "ERROR",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: -1, message: new String(error) });
        }
    });
}


module.exports = { insertAnimal, insertUser, insertMilk, insertNatality, insertInsemination, insertHealthControl };
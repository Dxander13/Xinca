const query = require('../dao/querys.consultas')


function searchAnimalByUser(idUser) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.searchAnimalByUser(idUser)
        console.log(result.length)
        try {
            if (result.length > 0) {
                mr = { state: 200, data: result, message: "SUCCES" };;
            } else {
                mr = {
                    state: 204,
                    data: "No se pudo encontrar ganado resgitrado con su usuario.",
                    messag: "SUCCES",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}


module.exports = { searchAnimalByUser }
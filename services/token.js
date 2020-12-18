var jwt = require('jsonwebtoken');
const models = require('../models');


// module.exports = {

//     //generar el token
//     encode: async(id, rol) => {

//     },
//     //permite decodificar el token
//     decode: async(token) => {
//         try {

//         } catch (e) {

//         }

//     }
// }
const checkToken = async (token) => {
    let localID = null;
    try {
        const id = token.decode(token);
        localID = id;
    }
    catch (error) {

    }
    const user = await models.user.findOne({
        where: {
            id: id,
            estado: 1,
        }
    });
    if (user) {
        const token = this.encode(user);
        return {
            token,
            rol : user.rol,
        }
    }
    else {
        return false
    }
};

module.exports = {
    //generar el token
    encode: async (user) => {
        const token = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email,
            rol: user.rol,
            status : user.estado,
        }, 'config.secret', { expiresIn: 86400 });
        return token;
    },
    //permite decodificar el token
    decode: async (token) => {
        try {
            const {id} = await jwt.verify(token, 'config.secret');
            const user = await models.user.findOne({
                where: {
                    id: id,
                    estado: 1,
                }
            });
            if (user) {
                return user;
            }
            else {
                return false;
            }
        }
        catch (error) {
            const newToken = await checkToken(token);
            return newToken
        }
    }
}
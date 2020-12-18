const tokenServices = require('../services/token.js');
module.exports = {
    verificarAdministrador: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'There is not token'
            })
        }
        else {
            const response = await tokenServices.decode(req.headers.token);
            if (response.rol === 'Admin') {
                next();
            }
            else {
                return res.status(403).send({
                    message: 'Unauthorized user'
                })
            }
        }
    },
    verificarVendedor: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'There is not token'
            })
        }
        else {
            const response = await tokenServices.decode(req.headers.token);
            if (response.rol === 'Administrador' || response.rol === 'Vendedor') {
                next();
            }
            else {
                return res.status(403).send({
                    message: 'Unauthorized user'
                })
            }
        }
    }
}
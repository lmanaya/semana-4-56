//Middleware de autenticacion;
const tokenServices = require('../services/token.js');

module.exports = {
    verifyUsuario: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenServices.decode(req.headers.token);
        if (response.rol == 'Administrador' || response.rol == 'Vendedor' || response.rol == 'Almacenero') {
            next();
        } else {
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
    verificarAdministrador: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'There is not token'
            })
        }
        else {
            const response = await tokenServices.decode(req.headers.token);
            if (response.rol === 'Administrador') {
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
        console.log(req.headers.token);
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'There is not token'
            })
        }
        else {
            const response = await tokenServices.decode(req.headers.token);
            if (response.rol == 'Administrador' || response.rol == 'Vendedor') {
                next();
            }
            else {
                return res.status(403).send({
                    message: 'Unauthorized user'
                })
            }
        }
    },
}
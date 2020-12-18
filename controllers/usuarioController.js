//Llamado a los modelos
const models = require('../models');
//Manejo de contraseñas encriptadas
const bcrypt = require('bcryptjs');

const tokenServices = require('../services/token.js');

//Login
exports.login = async (req, res, next) => {
    try {
        // Verificar que el usuario exista
        const user = await models.Usuario.findOne({ where: { email: req.body.email } });
        if (user) {
            // Verificar que la contraseña sea correcta
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid) {
                const token = await tokenServices.encode(user);
                // res.status(200).send({
                //     auth: true,
                //     tokenReturn: token,
                //     user: user,
                // });
                res.status(200).json({
                    tokenReturn: token,
                    user: user,
                });
            } else {
                // res.status(401).json({
                //     error: "Error en el usuario o contraseña"
                // });
                res.status(401).send({ 
                    auth: false, 
                    tokenReturn: null, 
                    reason: "Invalid Password!" });
            }
        } else {
            // res.status(404).json({
            //     error: "Error en el usuario o contraseña"
            // });
            res.status(404).send({
                error: "User Not Found."
            });
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error'
        }),
            next(error);
    }
}
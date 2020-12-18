//Llamado a los modelos
const models = require('../models');
//Manejo de contraseñas encriptadas
const bcrypt = require('bcryptjs');
// //JSON
// const jwt = require('jsonwebtoken');

//Métodos
exports.list = async (req, res, next) => {
    try {
        const articulos = await models.Articulo.findAll();
        if (articulos) {
            res.status(200).json(articulos);
        }
        else {
            res.status(404).send({
                message: 'No registered articles'
            })
        }
    }
    catch (error) {
        res.status(500).send({
            message: 'Error ->'
        });
        next(error);
    }
};
exports.add = async (req, res, next) => {
    try {
        const articulo = await models.Articulo.create(req.body);
        res.status(200).json(articulo);
    }
    catch (error) {
        res.status(500).send({
            message: 'Error ->'
        });
        next(error);
    }
};
exports.update = async (req, res, next) => {
    try {
        const articulo = await models.Articulo.update({ codigo: req.body.codigo, nombre: req.body.nombre, descripcion: req.body.descripcion, categoriaId: req.body.categoriaId },
            {
                where: {
                    id: req.body.id
                }
            });
        res.status(200).json(articulo);
    }
    catch (error) {
        res.status(500).send({
            message: 'Error ->'
        });
        next(error);
    }
};
exports.activate = async (req, res, next) => {
    try {
        const articulo = await models.Articulo.update({ estado: 1 },
            {
                where: {
                    id: req.body.id
                }
            });
        res.status(200).json(articulo);
    }
    catch (error) {
        res.status(500).send({
            message: 'Error ->'
        });
        next(error);
    }
};
exports.desactivate = async (req, res, next) => {
    try {
        const articulo = await models.Articulo.update({ estado: 0 },
            {
                where: {
                    id: req.body.id
                }
            });
        res.status(200).json(articulo);
    }
    catch (error) {
        res.status(500).send({
            message: 'Error ->'
        });
        next(error);
    }
}
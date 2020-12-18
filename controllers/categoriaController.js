//Llamado a los modelos
const models = require('../models');
//Manejo de contraseñas encriptadas
const bcrypt = require('bcryptjs');
//JSON
const jwt = require('jsonwebtoken');

//Métodos
exports.list = async (req, res, next) => {
    try {
        const categorias = await models.Categoria.findAll();
        if (categorias) {
            res.status(200).json(categorias);
        }
        else {
            res.status(404).send({
                message: 'No categories registered'
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
        const categoria = await models.Categoria.create(req.body);
        res.status(200).json(categoria);
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
        const categoria = await models.Categoria.update({ nombre: req.body.nombre, descripcion: req.body.descripcion },
            {
                where: {
                    id: req.body.id
                }
            });
        res.status(200).json(categoria);
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
        const categoria = await models.Categoria.update({ estado: 1 },
            {
                where: {
                    id: req.body.id
                }
            });
        res.status(200).json(categoria);
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
        const categoria = await models.Categoria.update({ estado: 0 },
            {
                where: {
                    id: req.body.id
                }
            });
        res.status(200).json(categoria);
    }
    catch (error) {
        res.status(500).send({
            message: 'Error ->'
        });
        next(error);
    }
}
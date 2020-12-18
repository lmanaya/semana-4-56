//Express
const router = require('express').Router();
// Ruta del controlador
const usuarioController = require('../../controllers/usuarioController.js');

router.post('/login', usuarioController.login); // .com/api/usuario/login

// Exportar el router
module.exports = router;
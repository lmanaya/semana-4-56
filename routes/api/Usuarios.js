//Express
const router = require('express').Router();
// Ruta del controlador
const usuarioController = require('../../controllers/usuarioController.js');
//Ruta del middlewaer
const auth = require('../../middlewares/auth')


router.get('/', auth.verificarVendedor, usuarioController.listar); // listar .com/api/auth/
router.post('/register', auth.verificarAdministrador, usuarioController.register);// register .com/api/auth/register
router.put('/update', auth.verificarAdministrador, usuarioController.update); // update .com/api/auth/update


router.post('/login', usuarioController.login); // Sign in .com/api/usuario/login

// Exportar el router
module.exports = router;
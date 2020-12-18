//Express
const router = require('express').Router();
// Ruta del controlador
const usuarioController = require('../../controllers/usuarioController.js');
//Ruta del middlewaer
const auth = require('../../middlewares/auth')

router.get('/list', auth.verificarVendedor, userController.list); // listar .com/api/auth/
router.post('/register', auth.verificarAdministrador, userController.register);// register .com/api/auth/register
router.put('/update', auth.verificarAdministrador, userController.update); // update .com/api/auth/update

router.post('/login', usuarioController.login); // .com/api/usuario/login

// Exportar el router
module.exports = router;
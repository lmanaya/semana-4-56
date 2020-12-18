//Express
const router = require('express').Router();
// Ruta del controlador
const categoriaController = require('../../controllers/categoriaController.js');
//Ruta del middlewaer
const auth = require('../../middlewares/auth')


router.get('/list', auth.verificarVendedor, categoriaController.list); // .com/api/categoria/list
router.post('/add', auth.verificarVendedor, categoriaController.add); // .com/api/categoria/add
router.put('/update', auth.verificarVendedor, categoriaController.update); // .com/api/categoria/update
router.put('/activate', auth.verificarVendedor, categoriaController.activate); // .com/api/categoria/activate
router.put('/desactivate', auth.verificarVendedor, categoriaController.desactivate); // .com/api/categoria/desactivate

// Exportar el router
module.exports = router;
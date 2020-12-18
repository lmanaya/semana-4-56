//Express
const router = require('express').Router();
// Ruta del controlador
const articuloController = require('../../controllers/articuloController.js');
//Ruta del middlewaer
const auth = require('../../middlewares/auth')


router.get('/list', auth.verificarVendedor, articuloController.list); // .com/api/articulo/list
router.post('/add', auth.verificarVendedor, articuloController.add); // .com/api/articulo/add
router.put('/update', auth.verificarVendedor, articuloController.update); // .com/api/articulo/update
router.put('/activate', auth.verificarVendedor, articuloController.activate); // .com/api/articulo/activate
router.put('/desactivate', auth.verificarVendedor, articuloController.desactivate); // .com/api/articulo/desactivate

// Exportar el router
module.exports = router;
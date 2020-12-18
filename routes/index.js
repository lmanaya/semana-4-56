//Express
const router = require('express').Router();

// Creación de mis manejadores de ruta
const apiRouterUsuario = require('./api/usuarios.js');
const apiRouterArticulo = require('./api/articulos.js');
const apiRouterCategoria = require('./api/categorias.js');


router.use('/usuario', apiRouterUsuario); // .com/api/usuario/
router.use('/articulo', apiRouterArticulo); // .com/api/articulo/
router.use('/categoria', apiRouterCategoria); // .com/api/categoria/

// Exportar el router
module.exports = router;
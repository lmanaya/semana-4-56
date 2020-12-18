// const routerx = require('express-promise-router');
// const categoriaRouter = require('./articulo');



// const router = routerx();

// router.use('/articulo', articuloRouter);

// module.exports = router;
//
//Ruta express
const router = require('express').Router();

// Manejo de las rutas
const apiRouterUsuario = require('./api/usuarios.js');
const apiRouterArticulo = require('./api/articulos.js');
const apiRouterCategoria = require('./api/categorias.js');


router.use('/usuario', apiRouterUsuario); // .com/api/usuario/
router.use('/articulo', apiRouterArticulo); // .com/api/articulo/
router.use('/categoria', apiRouterCategoria); // .com/api/categoria/

// Exportar el router
module.exports = router;
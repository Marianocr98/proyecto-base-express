// Acá nos falta express y el router
const express = require('express');
const router = express.Router();
// Aća nos falta traer el controller
const indexController = require('../controllers/mainController');
// Acá definimos las rutas

router.get('/', indexController.home);
router.get('/detalle/:id', indexController.detalle);

// Acá exportamos el resultado

module.exports = router;
const { Router } = require('express')
const { createProductora, getProductoras, updateProductoraByID,
    deleteProductoraByID, getProductorasById} = require('../controllers/productora')
const router = Router()

// crear
router.post('/', createProductora)

// consultar todos
router.get('/', getProductoras)

//actualizar
router.put('/:id', updateProductoraByID)

//eliminar
router.delete('/:id', deleteProductoraByID)

//listar por ID
router.get('/:id', getProductorasById)

module.exports = router;
const { Router } = require('express')
const { createTipo, getTipos, updateTipoByID, 
    deleteTipoByID, getTiposById} = require('../controllers/tipo')
const router = Router()

// crear
router.post('/', createTipo)

// consultar todos
router.get('/', getTipos)

//actualizar
router.put('/:id', updateTipoByID)

//eliminar
router.delete('/:id', deleteTipoByID)

//listar por ID
router.get('/:id', getTiposById)

module.exports = router;
const { Router } = require('express')
const { createGenero, getGeneros, updateGeneroByID,
    deleteGeneroByID, getGenerosById} = require('../controllers/genero')
const router = Router()

// crear
router.post('/', createGenero)

// consultar todos
router.get('/', getGeneros)

//actualizar
router.put('/:id', updateGeneroByID)

//eliminar
router.delete('/:id', deleteGeneroByID)

//listar por ID
router.get('/:id', getGenerosById)

module.exports = router;
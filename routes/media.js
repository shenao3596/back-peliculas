const { Router } = require('express')
const { createMedia, getMedias, updateMediaByID,
    deleteMediaByID, getMediasById} = require('../controllers/media')
const router = Router()

// crear
router.post('/', createMedia)

// consultar todos
router.get('/', getMedias)

//actualizar
router.put('/:id', updateMediaByID)

//eliminar
router.delete('/:id', deleteMediaByID)

//listar por ID
router.get('/:id', getMediasById)

module.exports = router;
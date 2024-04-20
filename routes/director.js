const { Router } = require('express')
const { createDirector, getDirectores, updateDirectorByID, 
    deleteDirectorByID, getDirectoresById} = require('../controllers/director')
const router = Router()

// crear
router.post('/', createDirector)

// consultar todos
router.get('/', getDirectores)


//actualizar
router.put('/:id', updateDirectorByID)

//eliminar
router.delete('/:id', deleteDirectorByID)

//listar por ID
router.get('/:id', getDirectoresById)



module.exports = router;
const Director = require('../models/director')
const { request, response} = require('express')

// crear
const createDirector = async (req = request, res = response) => {
    const {nombre} = req.body

    try{
        const directorDB = await Director.findOne({ nombre })
        if(directorDB){
         return res.status(400).json ({mjs: 'Ya esxiste nombre'})
    }
    const datos = {
        nombre,
    }

    const director = new Director(datos)
    console.log(director)
    await director.save()
    return res.status(201).json(director)
    }catch(error){
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

//listar
const getDirectores = async (req = request, res = response) => {
    try{
        const { estado } = req.query
        const directores = await Director.find({ estado })//select * from director
        return res.json(directores)
    }catch(error){
         console.log(error)
        return res.status(500).json({msj: error}) 
     }
}

// actualizar
const updateDirectorByID = async (req = request, res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const datos = req.body
        const id = req.params.id
        datos.fechaModificacion = new Date()
        console.log(datos)
        const director = await Director.findByIdAndUpdate(id, datos, {new: true})
        return res.json(director)
    }catch(error){
        console.log(error)
        return res.status(500).json({msj: error})
    }
}
//elimiar
const deleteDirectorByID = async (req = request, res = response) => {
    try{
        const{id} = req.params
        await Director.findByIdAndDelete({_id: id})
        return res.status(204).json({})
    }catch(error){
         console.log(error)
        return res.status(500).json({msj: error}) 
     }
}

//listar por ID
const getDirectoresById = async (req = request, res = response) => {
    try{
        const { estado } = req.query
        const Directores = await Director.findOne({ estado })//select * from tipo
        return res.json(Directores)
    }catch(error){
         console.log(error)
        return res.status(500).json({msj: error}) 
     }
}

module.exports = {createDirector, 
    getDirectores,
    updateDirectorByID,
    deleteDirectorByID,
    getDirectoresById
}

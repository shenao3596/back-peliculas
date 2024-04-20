const Genero = require('../models/genero')
const { request, response} = require('express')

// crear
const createGenero = async (req = request, res = response) => {
    const {nombre, descripcion} = req.body

    try{
    const generoDB = await Genero.findOne({ nombre })
        if(generoDB){
         return res.status(400).json ({mjs: 'Ya esxiste nombre'})
    }

    const datos = {
        nombre,
        descripcion
    }

    const genero = new Genero(datos)
    console.log(genero)
    await genero.save()
    return res.status(201).json(genero)
    }catch(error){
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

//listar
const getGeneros = async (req = request, res = response) => {
        try{
        const { estado } = req.query
        const generos = await Genero.find({ estado})//select * from genero
        return res.json(generos)
        }catch(error){
            console.log(error)
            return res.status(500).json({msj: error})
            }
 }

// actualizar
const updateGeneroByID = async (req = request, res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const datos = req.body
        const id = req.params.id
        datos.fechaModificacion = new Date()
        const genero = await Genero.findByIdAndUpdate(id, datos, {new: true})
        console.log(datos)
        return res.json(genero)
    }catch(error){
        console.log(error)
        return res.status(500).json({msj: error}) 
    }
}
//eliminar
const deleteGeneroByID = async (req = request, res = response) => {
    try{
        const{id} = req.params
        await Genero.findByIdAndDelete({_id: id})
        return res.status(204).json({})
    }catch(error){
         console.log(error)
        return res.status(500).json({msj: error}) 
     }
}

//listar por ID
const getGenerosById = async (req = request, res = response) => {
    try{
        const { estado } = req.query
        const Generos = await Genero.findOne({ estado })//select * from tipo
        return res.json(Generos)
    }catch(error){
         console.log(error)
        return res.status(500).json({msj: error}) 
     }
}

module.exports = {createGenero, 
    getGeneros,
    updateGeneroByID,
    deleteGeneroByID,
    getGenerosById
}

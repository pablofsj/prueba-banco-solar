import { bancoModel } from "../models/banco.model.js";


const allUsers = async (req, res) => {
    try {
        const users = await bancoModel.getUsers()
        return res.json(users)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error interno del servidor'})
        
    }
}

const newUser = async (req, res) =>{
    try {
        const {nombre, balance} = req.body
        const nuevo = await bancoModel.register(nombre, balance)
        return res.json(nuevo) 
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error interno del servidor'})
    }
}

const editUser = async (req,res) => {
    try {
        const {id} = req.params
        const {nombre, balance} = req.body
        const editar = await bancoModel.update(id, nombre, balance)
        return res.json(editar)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error interno del servidor'})
        
    }
}

const deleteUser = async (req,res) => {
    try {
        const {id} = req.params
        const remove = await bancoModel.remove(id)
        res.json(remove)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error interno del servidor'}) 
    }
}


export const bancoController = {
    allUsers,
    newUser,
    editUser,
    deleteUser
}
import { Router } from "express";
import { bancoController } from "../controllers/banco.controller.js";


const router = Router()

router.get('/usuarios', bancoController.allUsers)
router.post('/usuario', bancoController.newUser)
router.put('/usuario/:id', bancoController.editUser)
router.delete('/usuario/:id', bancoController.deleteUser)


export default router


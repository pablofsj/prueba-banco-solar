import 'dotenv/config'
import express from 'express'
import bancoRoutes from './routes/banco.route.js'
import transferenciaRoutes from './routes/transferencia.route.js'



const app = express()
const __dirname = import.meta.dirname

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use('/', bancoRoutes)
app.use('/', transferenciaRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor activo en puerto ${PORT}`))
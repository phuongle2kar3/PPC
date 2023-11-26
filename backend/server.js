const express = require('express')
const sql = require('mssql')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = express.Router()
const app = express()
require("dotenv").config();

const propertyRouter = require('./routes/propertyRoute')
const contractRouter = require('./routes/contractRoute')

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(router)
app.use('/api/property', propertyRouter)
app.use('/api/contract', contractRouter)


const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
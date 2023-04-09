require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const sampleRoutes = require('./routes/samples')
const cors = require('cors')

// express app
const app = express()

var idx = 1;
// middleware
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method, idx)
    idx = idx + 1
    next()
})

// routes
app.use('/api/samples', sampleRoutes)

app.get('/', (req, res) => {
    res.json({ msg: "Welcome to express!" })
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


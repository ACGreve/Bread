const express = require('express')
const methodOverride = require('method-override')
require('dotenv').config()
const breadController = require('./controllers/bread')
const bakerController = require('./controllers/baker')
const mongoose = require('mongoose')

const app = express()

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//routes
app.use('/breads', breadController)
app.use('/bakers', bakerController)

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT= process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))

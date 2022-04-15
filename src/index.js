const express = require("express");
const morgan = require("morgan");
const app = express()

require('dotenv').config()
require('./database')

app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(app.get('port'), () => {
    console.log('SERVER STARTED');
})
'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/student', (req, res)=> {
    let rawdata = fs.readFileSync('./student.json')
    let student = JSON.parse(rawdata)
    res.send({student})
})

app.listen(port, () => {
    console.log('Api REST esta corriendo')
})
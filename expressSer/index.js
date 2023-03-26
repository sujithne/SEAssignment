const express = require('express') // IMPORT express
const app = express() // create an instance of the import.
const port = 3000 // variable to store the port to listen on
require('dotenv').config();
const mongoose = require('mongoose')
const session = require('express-session')

app.get('/hello', (req, res) => res.send('Hello World!')) // IF you get a GET on '/' send 'Hello World' as a response'

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // make app listen on the port.

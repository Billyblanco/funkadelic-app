const express = require('express') 
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json())

const PORT = 3111
app.listen(PORT, () => console.log('Lets get down to business', PORT))
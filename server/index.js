const express = require('express') 
const bodyParser = require('body-parser')
const controller = require('./controller')

const app = express()
app.use(bodyParser.json())

app.get('/api/tracks', controller.getTracks)
app.post('/api/tracks', controller.addTracks)
app.delete('/api/tracks/:id', controller.deleteTracks)
app.put('/api/tracks/:id', controller.update)

const PORT = 3111
app.listen(PORT, () => console.log('hello are you there', PORT))
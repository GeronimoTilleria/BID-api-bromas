const JokesControllers = require('../controllers/jokes.controller');
const express = require('express');
const Joke = require('../models/jokes.model');
const app = express();

app.get('/api/jokes/', JokesControllers.findAllJokes);
app.get('/api/jokes/:id', JokesControllers.findOneJoke);
app.post('/api/jokes/new/', JokesControllers.createNewJoke);
app.put('/api/jokes/update/:id', JokesControllers.updateExtingJoke);
app.delete('/api/jokes/delete/:id', JokesControllers.deleteAnExistingJoke);

module.exports = app;

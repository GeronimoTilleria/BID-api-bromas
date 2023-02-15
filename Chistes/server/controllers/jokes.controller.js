const Joke = require('../models/jokes.model');

const findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: 'Something when wrong', error: err }));
};

const findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: 'Something when wrong', error: err }));
}

const createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ Joke: newJoke }))
        .catch(err => res.json({ message: 'Something when wrong', error: err }));
}

const updateExtingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({ Joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something when wrong', error: err }));
}

const deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(deletedJoke => res.json({ Joke: deletedJoke }))
        .catch(err => res.json({ message: 'Something when wrong', error: err }));
}
module.exports = {
    findAllJokes,
    findOneJoke,
    createNewJoke,
    updateExtingJoke,
    deleteAnExistingJoke
}
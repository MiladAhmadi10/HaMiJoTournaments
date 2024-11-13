const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    date: {type: Date, required: true},
    Location: {type: String, required: true},
    description: String,
});

module.exports = mongoose.model('Tournament, tournamentSchema')
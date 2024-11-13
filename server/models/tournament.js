const mongoose = require('mongoose');

//Define the tournament schema
const tournamentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String },
});

//Export the model correctly
module.exports = mongoose.model('Tournament', tournamentSchema);

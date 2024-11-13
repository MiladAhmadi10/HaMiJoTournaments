const Tournament = require('../models/tournament');

//Display all tournaments
exports.listTournaments = async (req, res) => {
  const tournaments = await Tournament.find();
  res.render('index', { tournaments });
};

//Show form to create a new tournament
exports.showCreateForm = (req, res) => {
  res.render('createTournament');
};

//Handle tournament creation
exports.createTournament = async (req, res) => {
  const { name, date, location, description } = req.body;
  await Tournament.create({ name, date, location, description });
  res.redirect('/');
};

//Show form to edit a tournament
exports.showEditForm = async (req, res) => {
  const tournament = await Tournament.findById(req.params.id);
  res.render('editTournament', { tournament });
};

//Handle tournament update
exports.editTournament = async (req, res) => {
  const { name, date, location, description } = req.body;
  await Tournament.findByIdAndUpdate(req.params.id, { name, date, location, description });
  res.redirect('/');
};

//Handle tournament deletion
exports.deleteTournament = async (req, res) => {
  await Tournament.findByIdAndDelete(req.params.id);
  res.redirect('/');
};

const express = require('express');
const router = express.Router();
const Tournament = require('../models/tournament'); 

router.get('/', async (req, res) => {
  const tournaments = await Tournament.find();
  res.render('index', { tournaments });
});

router.get('/create', (req, res) => {
  res.render('createTournament');
});

router.post('/create', async (req, res) => {
  const { name, date } = req.body;
  const tournament = new Tournament({ name, date });
  await tournament.save();
  res.redirect('/');
});

module.exports = router;

const express = require('express');
const router = express.Router();
const tournamentController = require('../controllers/tournamentController');

//defining routes
router.get('/', tournamentController.listTournaments);
router.get('/create', tournamentController.showCreateForm);
router.post('/create', tournamentController.createTournament);
router.get('/edit/:id', tournamentController.showEditForm);
router.post('/edit/:id', tournamentController.editTournament);
router.get('/delete/:id', tournamentController.deleteTournament);

module.exports = router;
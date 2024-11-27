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

//login
router.get('/login', tournamentController.displayLoginPage);
router.post('/login', tournamentController.processLoginPage);

//register
router.get('/register', tournamentController.displayRegisterPage);
router.post('/register', tournamentController.processRegisterPage);
//logout
router.get('/logout', tournamentController.peformLogout);

module.exports = router;
const express = require('express');
const router = express.Router();
const {
  initializeTeams,
  getAllTeams,
  getTeamByName,
  auctionPlayer,
  resetTeamBudget,
  resetAllTeams
} = require('../controllers/teamController');

// POST /api/teams/initialize - Initialize all teams
router.post('/initialize', initializeTeams);

// GET /api/teams - Get all teams
router.get('/', getAllTeams);

// GET /api/teams/:name - Get team by name
router.get('/:name', getTeamByName);

// POST /api/teams/auction - Auction a player
router.post('/auction', auctionPlayer);

// PUT /api/teams/:teamName/reset - Reset team budget
router.put('/:teamName/reset', resetTeamBudget);

// DELETE /api/teams/truncate - Reset all teams
router.delete('/truncate', resetAllTeams);

module.exports = router;

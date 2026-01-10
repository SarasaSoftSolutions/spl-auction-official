const express = require('express');
const router = express.Router();
const {
  registerPlayer,
  getAllPlayers,
  getPlayerById,
  deleteAllPlayers
} = require('../controllers/playerController');

// POST /api/players - Register a new player
router.post('/', registerPlayer);

// GET /api/players - Get all players
router.get('/', getAllPlayers);

// GET /api/players/:id - Get player by ID
router.get('/:id', getPlayerById);

// DELETE /api/players/truncate - Delete all players
router.delete('/truncate', deleteAllPlayers);

module.exports = router;

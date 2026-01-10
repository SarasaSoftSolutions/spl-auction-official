const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
    unique: true,
    enum: ['Software', 'Marketing', 'Technical', 'Accounts']
  },
  initialBudget: {
    type: Number,
    default: 10000
  },
  remainingBudget: {
    type: Number,
    default: 10000
  },
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Team', teamSchema);

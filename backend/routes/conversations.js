const express = require('express');
const Conversation = require('../models/Conversation');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get conversations for logged-in user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const conversations = await Conversation.find({ participants: req.user.userId });
    res.json(conversations);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new conversation
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { participantIds, itemId } = req.body;

    // Avoid duplicate conversations for same participants & item
    const existing = await Conversation.findOne({
      participants: { $all: participantIds },
      itemId
    });

    if (existing) return res.status(400).json({ message: 'Conversation already exists' });

    const conversation = new Conversation({
      participants: participantIds,
      itemId
    });
    await conversation.save();
    res.status(201).json(conversation);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

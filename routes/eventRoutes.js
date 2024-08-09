const express = require('express');
const router = express.Router();
const { createEvent, getUserEvents } = require('../controllers/eventController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/events', authMiddleware, createEvent);
router.get('/events', authMiddleware, getUserEvents);

module.exports = router;

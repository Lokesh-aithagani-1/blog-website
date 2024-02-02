
const express = require('express');
const commentsController = require('../controllers/commentsController');
const router = express.Router();

router.post('/:postId', commentsController.addComment);

module.exports = router;

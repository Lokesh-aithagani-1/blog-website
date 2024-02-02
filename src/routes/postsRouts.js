
const express = require('express');
const postsController = require('../controllers/postsController');
const router = express.Router();

router.post('/', postsController.createPost);

module.exports = router;

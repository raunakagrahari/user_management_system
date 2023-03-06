const express = require('express');
const userRoutes  = require('./../modules/user.routes');
const { version } = require('./../package.json');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`API Endpoint is working. Version - ${version}`);
});

// Main Routes
router.use('/user', userRoutes);

module.exports = router;

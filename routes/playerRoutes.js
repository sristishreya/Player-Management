const path = require('path');
const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

router.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/create.html'));
  });

  router.get('/playerDetails.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/playerDetails.html'));
});

router.get('/:name',playerController.getPlayerbyName)
router.post('/',playerController.createPlayers)
router.put('/:name',playerController.updatePlayer)

module.exports = router;
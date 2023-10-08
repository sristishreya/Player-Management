const Players= require('../models/cricket')
exports.createPlayers=(req,res)=>{
    Players.create(req.body)
    .then(player =>{
        res.status(201).json(player);
    })
    .catch(error => {
        res.status(400).json({ error: 'player creation failed' });
      });
};

exports.getPlayerbyName=(req,res)=>{
    const { name }=req.params;
    const decodedName = decodeURIComponent(name);
    Players.findByPk(decodedName)
      .then(player => {
        if (!player) {
          res.status(404).json({ error: 'Player not found' });
        } else {
          res.status(200).json(player);
        }
      })
      .catch(error => {
        res.status(500).json({ error: 'Error fetching player by name' });
      });
  };

  exports.updatePlayer = (req, res) => {
    const { name } = req.params;
    const decodedName = decodeURIComponent(name);

    const updatedPlayer = req.body;
  
    Players.findByPk(decodedName)
      .then(player => {
        if (!player) {
          res.status(404).json({ error: 'Player not found' });
        } else {
          return player.update(updatedPlayer);
        }
      })
      //postman
      .then(updatedPlayer => {
        res.status(200).json(updatedPlayer);
      })
      .catch(error => {
        res.status(500).json({ error: 'Player update failed' });
      });
  };


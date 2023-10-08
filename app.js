const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const playerRoutes = require('./routes/playerRoutes');
const sequelize = require('./models/cricket');
app.use(bodyParser.json());
app.use('/api/player', playerRoutes);

sequelize.sync().then(() => {
    console.log('Database synced');
  }).catch(err => {
    console.error('Error syncing database:', err);
  });
  
  app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });


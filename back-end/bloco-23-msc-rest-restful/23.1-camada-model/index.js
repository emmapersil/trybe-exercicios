const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/User');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!User.userValidation(firstName, lastName, email, password)) {
    res.status(401).json({ error: 'Não criada e tals'})
  }


  res.status(201).json({ message: "User created" });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
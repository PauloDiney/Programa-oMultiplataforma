const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const membroRoutes = require('./routes/membroRoutes');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/exer', membroRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost: `+port);
});
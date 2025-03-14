const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usuarioRoutes = require('./routes/usuarioRoutes');


const app = express();

const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', usuarioRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost: `+port);
});
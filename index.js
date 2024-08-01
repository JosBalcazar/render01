const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');

require('dotenv').config();
const mongoURL = process.env.MONGODB_URI

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || mongoURL;

app.use(bodyParser.json());
app.use('/products', productRoutes);

mongoose.connect(mongoURI, {})
.then(() => console.log('Conectado a MongoDB !'))
.catch(err => console.error('Error de conexión a MongoDB:', err));

const server = app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

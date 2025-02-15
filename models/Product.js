const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  codigo: { type: String, required: true },
  descripcion: { type: String, required: true },
  marca: { type: String, required: true },
  precio: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchema);

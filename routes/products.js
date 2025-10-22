// routes/products.js
const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: 'Bike', price: 60000 },
  { id: 2, name: 'Car', price: 100000 },
  { id: 3, name: 'Bus', price: 100000 },
  { id: 4, name: 'Ship', price: 100000 },
  { id: 5, name: 'Lorry', price: 100000 },
];

// GET /products → Send all products
router.get('/', (req, res) => {
  res.json(products);
});

// POST /products → Add new product
router.post('/', (req, res) => {
  const newProduct = req.body;
  if (!newProduct.name || !newProduct.price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  newProduct.id = products.length + 1;
  products.push(newProduct);

  res.status(201).json({ message: 'Product added successfully', product: newProduct });
});

module.exports = router;

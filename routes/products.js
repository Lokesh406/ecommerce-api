
const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: 'Bike', price: 60000 },
  { id: 2, name: 'Car', price: 100000 },
  { id: 3, name: 'Bus', price: 100000 },
  { id: 4, name: 'Ship', price: 100000 },
  { id: 5, name: 'Lorry', price: 100000 }
];

// GET /products → Send all products
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    count: products.length,
    data: products
  });
});

router.post('/', (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Request body is missing or invalid. Make sure Content-Type is application/json.'
    });
  }

  const { name, price } = req.body;

  if (!name || price == null) {
    return res.status(400).json({ success: false, message: 'Name and price are required.' });
  }

  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ success: false, message: 'Price must be a positive number.' });
  }

  const existingProduct = products.find(p => p.name.toLowerCase() === name.toLowerCase());
  if (existingProduct) {
    return res.status(409).json({ success: false, message: 'Product with this name already exists.' });
  }

  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    price
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    message: ' Product added successfully!',
    product: newProduct,
    allProducts: products
  });
});

module.exports = router;

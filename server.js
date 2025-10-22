// server.js
const express = require('express');
const cors = require('cors');
const os = require('os');
const http = require('http');
const productRoutes = require('./routes/products');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Create HTTP server to log requests
const server = http.createServer((req, res) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  app(req, res); // Pass request to Express
});

// Routes
app.use('/products', productRoutes);

// Print system info on startup
console.log('System Information:');
console.log(`Platform: ${os.platform()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`Hostname: ${os.hostname()}`);

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

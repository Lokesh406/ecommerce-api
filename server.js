// server.js
const express = require('express');
const cors = require('cors');
const os = require('os');
const http = require('http');
const productRoutes = require('./routes/products');

const app = express();
const PORT = 4000;

// ✅ Middleware (must come before routes)
app.use(cors());
app.use(express.json()); // parse incoming JSON

// ✅ Log every request method and URL
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next();
});

// ✅ Routes
app.use('/products', productRoutes);

// ✅ Print system info when server starts
console.log('System Information:');
console.log(`Platform: ${os.platform()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`Hostname: ${os.hostname()}`);

// ✅ Create HTTP server that uses Express
const server = http.createServer(app);

// ✅ Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

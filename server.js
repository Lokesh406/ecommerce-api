const express = require('express');
const cors = require('cors');
const os = require('os');
const http = require('http');
const productRoutes = require('./routes/products');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json()); 

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next();
});

app.use('/products', productRoutes);

console.log('System Information:');
console.log(`Platform: ${os.platform()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`Hostname: ${os.hostname()}`);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});

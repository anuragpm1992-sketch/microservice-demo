const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ service: "Product Service", status: "Running" });
});

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" }
  ]);
});

app.listen(3000, () => console.log('Product Service running'));

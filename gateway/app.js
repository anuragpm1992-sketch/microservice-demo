const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
  res.send("API Gateway Running");
});

app.get('/users', async (req, res) => {
  const response = await axios.get('http://user-service/users');
  res.json(response.data);
});

app.get('/products', async (req, res) => {
  const response = await axios.get('http://product-service/products');
  res.json(response.data);
});

app.get('/orders', async (req, res) => {
  const response = await axios.get('http://order-service/orders');
  res.json(response.data);
});

app.listen(3000, () => console.log('Gateway running'));

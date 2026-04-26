const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
  res.json({ service: "Order Service", status: "Running" });
});

app.get('/orders', async (req, res) => {
  try {
    const users = await axios.get('http://user-service');
    const products = await axios.get('http://product-service');

    res.json({
      order: "Sample Order",
      users: users.data,
      products: products.data
    });
  } catch (err) {
    res.send("Error connecting to services");
  }
});

app.listen(3000, () => console.log('Order Service running'));

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ service: "User Service", status: "Running" });
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: "Anurag" },
    { id: 2, name: "DevOps User" }
  ]);
});

app.listen(3000, () => console.log('User Service running'));

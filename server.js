const express = require('express');
const app = express();

// Dummy data for men and women products
const menProducts = [
  { id: 1, name: 'Men Product 1', category: 'Men' },
  { id: 2, name: 'Men Product 2', category: 'Men' },
  // Add more products here
];

const womenProducts = [
  { id: 1, name: 'Women Product 1', category: 'Women' },
  { id: 2, name: 'Women Product 2', category: 'Women' },
  // Add more products here
];

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to Men & Women Dummy Data');
});

// Endpoint for getting 10 products data for men
app.get('/men', (req, res) => {
  res.json(menProducts.slice(0, 10));
});

// Endpoint for getting 10 products data for women
app.get('/women', (req, res) => {
  res.json(womenProducts.slice(0, 10));
});

// Handling "page not found" for all other routes
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const app = express();

// Initialize the counter
let counter = 0;

// Middleware to parse JSON request bodies
app.use(express.json());

// Endpoint to get the current counter value
app.get('/', (req, res) => {
  res.json({ counter });
});

// Endpoint to increment the counter by 1
app.post('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

// Endpoint to decrement the counter by 1
app.post('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

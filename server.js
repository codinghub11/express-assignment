const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Route for generating a random number
app.get('/random', (req, res) => {
  // Generate a random number between 1 and 100 (adjust as needed)
  const randomNum = Math.floor(Math.random() * 100) + 1;
  res.json({ random: randomNum });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

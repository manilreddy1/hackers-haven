// app.js (Node.js/Express Backend)
const express = require('express');
const app = express();
const port = 3000;
// Sample blog posts data
const blogPosts = [
  { title: "Introduction to Ethical Hacking", content: "Content goes here..." },
  { title: "Top Cybersecurity Tools", content: "Content goes here..." },
  { title: "The Rise of Ransomware", content: "Content goes here..." }
];

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Blog route to fetch posts
app.get('/blog', (req, res) => {
  res.json(blogPosts);
});

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to Hacker\'s Haven');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

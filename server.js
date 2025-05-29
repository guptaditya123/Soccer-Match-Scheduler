const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = 3000;
const API_URL = 'https://www.scorebat.com/video-api/v3/';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/matches', async (req, res) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    res.json(data.response.slice(0, 10)); // return top 10 matches
  } catch (err) {
    console.error('Error fetching from ScoreBat:', err);
    res.status(500).json({ error: 'Failed to fetch match data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

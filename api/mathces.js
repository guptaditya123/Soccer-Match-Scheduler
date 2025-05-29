const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const API_URL = 'https://www.scorebat.com/video-api/v3/';

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    res.status(200).json(data.response.slice(0, 10)); // Top 10 matches
  } catch (err) {
    console.error('Error fetching from ScoreBat:', err);
    res.status(500).json({ error: 'Failed to fetch match data' });
  }
};

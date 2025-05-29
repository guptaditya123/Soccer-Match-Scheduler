fetch('/api/matches')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('matches-list');
    list.innerHTML = ''; // Clear old items

    data.forEach(match => {
      const item = document.createElement('li');

      // Match title: usually like "Team A - Team B"
      const title = match.title || 'Unknown Match';

      // Parse date
      const date = new Date(match.date);

      const formattedDate = date.toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      item.innerHTML = `
        <strong>${title}</strong><br>
        <small>${formattedDate}</small>
      `;

      list.appendChild(item);
    });
  })
  .catch(err => {
    console.error('Fetch error:', err);
    document.getElementById('matches-list').innerHTML = '<li>Error fetching data. Please try again later.</li>';
  });

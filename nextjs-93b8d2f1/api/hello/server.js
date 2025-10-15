const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Üdvözlünk az autóbérlés backend szerverén!' });
});

app.listen(PORT, () => {
  console.log(`Szerver fut a ${PORT}-as porton`);
});
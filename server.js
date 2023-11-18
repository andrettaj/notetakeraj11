const express = require('express');
const path = require('path');
const notesData = require('./db/db.json');

const app = express();
const PORT = 3001;

app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) => {

    res.json(notesData);
});
  

app.post('/api/notes', (req, res) => {
  console.log (req.body)

});



app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
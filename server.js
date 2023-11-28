const express = require('express');
const path = require('path');
let notesData = require('./db/db.json');
const fs = require ('fs')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) => {
  notesData=JSON.parse (fs.readFileSync("./db/db.json"))||[]
    res.json(notesData);
});
  

app.post('/api/notes', (req, res) => {
  console.log (req.body)
  let newNote = {
    title: req.body.title,
    text:req.body.text
  }
  console.log(notesData)
  notesData.push(newNote)
  fs.writeFileSync("./db/db.json", JSON.stringify(notesData),function(err){
    if(err) throw err;
  })
  res.json(notesData)
});



app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
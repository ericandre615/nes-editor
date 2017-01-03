const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, 'data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/is-alive', (req, res) => {
  res.json({ success: true, data: 'server is alive'});
  res.end();
});

app.post('/api/sprite', (req, res) => {
  // need to add check for data type
  const data = req.body.data;
  const name = req.body.name || 'output';

  fs.writeFileSync(path.join(dataPath, `${ name }.chr`), Buffer.from(data));
  res.json({ success: true, data: 'saved chr'});
  res.end();
});

app.listen(9800, () => {
  console.log('server listening on 9800');
});

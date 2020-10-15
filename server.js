const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { getData } = require('./module/server-module');

const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pathToData = './data/';    //путь к данным

app.get('/api/data', (req, res) => {
  const data = getData(pathToData + 'data.json');
  console.log('GET');
  //data = [{a: 1}];
  res.send(JSON.stringify(data));
});

app.post('/api/data', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

//console.log('GET', getData(pathToData + 'data.json'));

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Сервер запущен на порту ${port}`));

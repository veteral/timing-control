const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { getData, setData } = require('./module/server-module');
//const {file} = require('./module/setting');

const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pathToData = './data/';    //путь к данным


/***************************************************
 * GET method (data.json)
 */
app.get('/api/data', (req, res) => {
  const data = getData(pathToData + 'data.json');
  //console.log('GET', data);
  //data = {a: 1};
  res.json(data);
});

/***************************************************
 * GET method (exec.json)
 */
app.get('/api/exec', (req, res) => {
  const data = getData(pathToData + 'exec.json');
  //console.log('GET', data);
  //data = {a: 1};
  res.json(data);
});

/******************************************************
 * POST method
 */
app.post('/api/data', (req, res) => {
  //console.log(req.body);
  setData(pathToData + 'data.json', req.body);
  res.json(req.body);
});

/****************************************************
 * POST method exec
 */
app.post('/api/exec', (req, res) => {
  //console.log(req.body);
  setData(pathToData + 'data.json', req.body.data);

  let execData = getData(pathToData + 'exec.json');
  
  execData.exec.push(req.body.execRow);

  //console.log('Data', execData);
  setData(pathToData + 'exec.json', execData);

  res.json(req.body.data);
});

//***************************************** */
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Сервер запущен на порту ${port}`));

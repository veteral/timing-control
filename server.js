const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { getData } = require('./module/server-module');

const app = express();

// подключаем заголовки, чтобы можно было сделать запрос
// на сторонний ресурс (адрес)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const path = './json/data/';    //путь к данным
/*
 получение данных control
 */
app.get('/', (req, res, next) => {
         
  //const control = getData(path + 'control.json');    
  //const execution = getData(path + 'execution.json');
  //const type = getData(path + 'type.json');
  
  //const data = {control, execution, type};
  const data = getData(path + 'data.json');
  //console.log('data', data);

  res.send(data);  
});

app.post('/', (req, res, next) => {
  const data = { ...req.body }
  console.log('req.body', data);

  if (!req.body) return res.sendStatus(400);
});


app.listen(5000, () => {
  console.log('Сервер ожидает подключения...');
});
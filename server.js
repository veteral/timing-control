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


/*
 получение данных control
 */
app.get('/', (req, res, next) => {

  const path = './json/data/';
         
  const control = getData(path + 'control.json');    
  const execution = getData(path + 'execution.json');
  const type = getData(path + 'type.json');
  
  const data = {control, execution, type};
  console.log('data', data);

  res.send(data);  
});


app.listen(5000, () => {
  console.log('Сервер ожидает подключения...');
});
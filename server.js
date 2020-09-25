const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

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
       
  const control = JSON.parse(fs.readFileSync('./src/json/data/control.json', 'utf8'));    
  const execution = JSON.parse(fs.readFileSync('./src/json/data/execution.json', 'utf8'));
  const type = JSON.parse(fs.readFileSync('./src/json/data/type.json', 'utf8'));
  
  const data = {control, execution, type};
  
  res.send(data);  
});

app.listen(5000, () => {
  console.log('Сервер ожидает подключения...');
});
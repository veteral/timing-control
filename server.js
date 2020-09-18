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

  const arrControl = control.tableBody;
  const arrType = type.data;
  const arrExecution = execution.data;

  const data = arrControl.map(m => {     
    const t = arrType.filter(f => f.id === m.typeDoc);    
    const e = arrExecution.filter(f => f.id === m.executorDoc);    
    
    m.typeDoc = t[0].name;
    m.executorDoc = e[0].name;
    
    return m;    
  });
  
  const objData = {...control, tableBody: data};
  
  res.send(objData);  
});

app.listen(5000, () => {
  console.log('Сервер ожидает подключения...');
});
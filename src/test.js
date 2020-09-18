

let obj = {
    table: []
};


console.log("write file");

obj.table.push({id: 1, square:2});

let fs = require('fs');
fs.writeFile('index.json', json, 'utf8', callback);

console.log("end write file");

console.log("read file");
fs.readFile('index.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
        obj = JSON.parse(data); //now it an object
        obj.table.push({id: 2, square:3}); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile('index.json', json, 'utf8', callback); // write it back
    }
});

console.log("end read file");
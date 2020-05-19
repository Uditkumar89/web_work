const os=require('os');
const fs=require('fs');
const path = require('path');
//Nodee js golbal variable

console.log(`${__dirname}`);
console.log(`${__filename}`);
let dirPath=path.join(__dirname,'node.txt');

console.log(`${dirPath}`);


//total memory
let totalmemory=os.totalmem();
console.log(`total memory: ${totalmemory}`);

//total memory
let freeMemory=os.freemem();
console.log(`free memory: ${freeMemory}`);

//total memory
let hostName=os.hostname();
console.log(`hostName : ${hostName}`);

//total memory
let homedir=os.homedir();
console.log(`hostName : ${homedir}`);



//write to new file

let filename='node.txt';
let fileContent='ffffffffffffffffffffffffffffffffffffffffffffgfgfgrerer';

fs.writeFile(filename,fileContent,'utf-8',(err)=>{
    if(err) throw err;
    console.log('data save');
}

);

//read file
fs.readFile(filename,'utf-8',(err,aaa)=>{
    if(err) throw err;
    console.log(aaa);
});


//nested file write

let filepath= path.join(__dirname,'data','employee','employee.txt');

fileContent = 'Hello udit';
fs.writeFile(filename,fileContent,'utf-8',(err)=>{
    if(err) throw err;
    console.log('data save');
});


//read and write

fs.readFile(path.join(__dirname,'app2.js'),'utf-8',(err, aaa)=>{
    if(err) throw err;

    fs.writeFile(path.join(__dirname,'data','employee','program.txt'),aaa,'utf-8',(err)=>{
        if(err) throw err;
    console.log('data saveaaaa');
    });
});



//josn file write

let person=[{"id":1,"name":"Rajan","age":25,"designation":"Software Engineer"},{"id":2,"name":"John","age":40,"designation":"Project Manager"},{"id":3,"name":"wilson","age":48,"designation":"Sr. Delivery Manager"},{"id":4,"name":"Mahesh","age":29,"designation":"Tech Lead"}];

fs.writeFile(path.join(__dirname,'person.json'),JSON.stringify(person),'utf-8',(err)=>{
    if(err) throw err;
    console.log('josn data savevvvvv');
});

//read from json file

fs.readFile(path.join(__dirname,'person.json'),'utf-8',(err, abc)=>{
    if(err) throw err;
    let person=JSON.parse(abc);
    console.log(person);

});
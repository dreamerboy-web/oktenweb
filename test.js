// console.log(33);
// let testName = "loxa";
//
// exports.name = testName
//
// exports.age = 44
//
// exports.test = "testName"
//
// exports.asd = "asdasdasd"
//
// class Class {
//     constructor(){
//
//     }
//
//     print(arr){
//         console.log(arr);
//     }
// }
//
// let array = new Class();
//
// module.exports = array;
//
// let EventEmitor = require('events').EventEmitter;
// let event = new EventEmitor;
//
// event.on('event', ()=>{
//     console.log(33333333333333);
// });
//
// module.exports = event
//
// let EventEmitor = require('events').EventEmitter;
//
// module.exports = class Person extends EventEmitor{
//     constructor(name){
//         super();
//         this.name = name;
//
//         this.on('hello', (person)=>{
//             console.log("hello", person.name);
//             person.emit('go')
//         })
//
//         this.on('go', ()=>{
//             console.log("gogogo", name);
//         })
//     }
// }






// const numb = require('./test');
// console.log(22);
//
// console.log(numb.test);
// const clas = require('./test');
//
// clas.print([45,64,65,465,46,4,87,987,98,7])
//
// const Emiter = require('events').EventEmitter;
//
// let eventEmitor = new Emiter();
//
// eventEmitor.on('ping', ()=>{
//     console.log('pong');
// });
//
// setTimeout(()=>{
//     eventEmitor.emit('ping')
// },2000);
//
// let eventEmitor = require('./test');
//
// eventEmitor.emit('event');
//
// let person = require('./test');
//
// let Stasy = new person('Stasy');
// let Roman = new person('Roman');
//
// Stasy.emit('hello', Roman);

// const fs = require("fs");

// fs.readFile("./text.txt", {}, ((err, data) => {
//     console.log(data.toString());
// }));

// let data = "Hello my name is Roman";
// fs.writeFile('./textes.txt', data, {flag:'a'}, (err)=>{
//     if(!err) console.log('ok');
// });

// fs.appendFile('./text.txt', `\n${data} was at ${Date.now()}`, {}, (err)=>{
//     if(!err) console.log('ok');
// });
//
// fs.stat('./text.txt', (err, stats)=>{
//     console.log(stats);
// })

// fs.truncate('./text.txt', 10, (err => {
//     if(!err) console.log('ok');
// }));

// fs.readdir('./new',{}, ((err, files) => {
//     if(!err) console.log('ok');
//     console.log(files);
// }))

// fs.rename('./text', './texts', err => {
//     if(!err) console.log('ok');
// })

// fs.mkdir('./nodetry', err => {
//     if(!err) console.log('ok');
// })

// let WriteStream = fs.createWriteStream('./chunk22.txt');

// let readStr = fs.createReadStream('./chunk.txt', );
// readStr.on('data', (chunk)=>{
//     WriteStream.write(chunk)
// })

// fs.createReadStream('./chunk.txt').pipe(fs.createWriteStream('./chunk33.txt'));

// for (let i = 0; i < 1e5; i++) {
//     WriteStream.write('Joji is the best')
// }
// console.log('good');

// let readStr = fs.createReadStream('./chunk.txt', );
// readStr.on('data', (chunk)=>{
//     console.log(chunk.toString());
// })
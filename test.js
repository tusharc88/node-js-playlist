// this tells that setInterval, clearInterval are available from global

// var time = 0;
// var timer = setInterval(function() {
//   time += 2;
//   console.log(time + ' seconds have passed');
//   if(time > 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// __dirname, __filename is also available in global
// console.log(__dirname);
// console.log(__filename);

// Event emitter
// var events = require('events');
// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvent', function(msg) {
//   console.log('msg: ' + msg);
// })
//
// myEmitter.emit('someEvent', 'this event was emitted');

// Util module in NodeJs
// var util = require('util');
//
// var Person = function(name) {
//   this.name = name;
// }

// Now we want Person to inherit (just like java class) EventEmitter, so that we can create custom events for Person,
// we will use util.inhertis function

// util.inherits(Person, events.EventEmitter);
//
// var james = new Person('james');
// var mary = new Person('mary');
// var ryu = new Person('ryu');
// var people = [james, mary, ryu];
//
// people.forEach(function(person) {
//   person.on('speak',  function(msg) {
//     console.log(person.name+" said "+msg);
//   });
// });
//
// james.emit('speak', 'hey dude');
// ryu.emit('speak', 'I want a curry');

// fs core module of NodeJs
// var fs = require('fs');

// synchronous file reading & writing
// var readme = fs.readFileSync('./README.md', 'utf8');
// console.log(readme);

// fs.writeFileSync('writeme.txt', readme);

// async file reading & writing
// fs.readFile('./README.md', 'utf8', function(err, data) {
// console.log(data);
// fs.writeFile('writeme.txt', data, function() {
// console.log('Writing done')
// });
// });

// to delete a file
// fs.unlink('./writeme.txt', function() {
//   // do something after deleting
// });
//
// // create directory
// // synchronous way
// // fs.mkdirSync('stuff');
// // fs.rmdirSync('stuff');
//
// // async way
// fs.mkdir('stuff', function() {
//   fs.readFile('./README.md', 'utf8', function(err, data) {
//     fs.writeFile('./stuff/writeMe.txt', data, function() {
//       // console.log('writeMe.txt created in stuff folder');
//     });
//   });
// });
//
// // you can't remove a directory which is not empty
// fs.unlink('./stuff/writeMe.txt');
// fs.rmdir('stuff', function() {
//   // do something on deleting directory
// });

// Create server
// var http = require('http');
// var server = http.createServer(function(req, res) {
//   console.log('request was made at ' + req.url);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hey ninjas');
// });
//
//
// server.listen(3000, '127.0.0.1');

// while reading a big file... we should create a stream and read and write chunks of data
// var fs = require('fs');
// var myReadStream = fs.createReadStream(__dirname + '/README.md', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writestream.txt');
// // createReadStream inherits from EventEmitter and has an event called data so it is listening on any data it receives
// myReadStream.on('data', function(chunk) {
//   // if utf8 is not mentioned in the 3rd param while creating a stream... chunk will console log Buffer raw data
//   // console.log('new chunk received');
//   // console.log(chunk);
//   myWriteStream.write(chunk);
// });

// A more elegant way to read stream and write stream... Pipes
// var fs = require('fs');
// var myReadStream = fs.createReadStream(__dirname + '/README.md', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writestream.txt');
//
// myReadStream.pipe(myWriteStream);

// var http = require('http');
//     var server = http.createServer(function(req, res) {
//     console.log('request was made at ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     var myReadStream = fs.createReadStream(__dirname + '/README.md', 'utf8');
//     // var myWriteStream = fs.createWriteStream(__dirname + '/writestream.txt');
//
//     myReadStream.pipe(res);
//     // res.end('Hey ninjas');
// });

// var http = require('http');
//     var server = http.createServer(function(req, res) {
//     console.log('request was made at ' + req.url);
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     var myObj = {
//       name: 'Ryu',
//       job: 'Ninja',
//       age: 29
//     }
//     res.end(JSON.stringify(myObj));
// });
//
// server.listen(3000, '127.0.0.1');

// Routing
// var fs = require('fs');
// var http = require('http');
// var server = http.createServer(function(req, res) {
//   console.log('request was made at ' + req.url);
//   if (req.url === '/home' || req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     fs.createReadStream(__dirname + '/index.html').pipe(res);
//     // res.end('feed me popcorn');
//   } else if (req.url === '/contact') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('feed me popcorn');
//   }
// });
//
// server.listen(3000, '127.0.0.1');

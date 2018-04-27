// what this returns is a function, so to get the capability of what comes wrapped with express... fire up the function
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// to set template engine
app.set('view engine', 'ejs');

// to set middleware, use app.use(optionalRoute, callback);  callback(req, res, next) {}  next is to tell, ok we are finished with this middleware
// and you can go on to the next middleware... chaining of middlewares.
// app.use('/', function(req, res, next) {
//   next(); // tells it to go to get('/') request method coz we are writing middleware for '/' route. Since this is the only middleware we want to use,
//   // it has to be linked to similar route request method for which the middleware is being written
// });

// try this and hit localhost:3000/assets/style.css  and see your terminal (when running nodemon app.js)
// app.use('/assets', function(req, res, next) {
//   console.log(req.url);
//   next();
// });

// express comes with builtin middleware to request for static files, app.use(route, express.static(folderNameWhereStaticFilesAre))
app.use('/assets', express.static('assets'));

// app.get('/', function(req, res) {
//   res.send('this is the homepage');
// });

app.get('/', function(req, res) {
  // send absolute url
  res.render('index');
});

// app.get('/contact', function(req, res) {
//   res.send('this is the contact page');
// });

app.get('/contact', function(req, res) {
  // console.log(req.query);
  res.render('contact', { qs: req.query });
});

// POST /login gets urlencoded bodies
app.post('/contact', urlencodedParser, function(req, res) {
  // console.log(req.body);
  res.render('contact-success', { data: req.body });
});

// app.get('/profile/:id', function(req, res) {
//   res.send('you requested to see profile with id of ' + req.params.id);
// });

// To send template file *.ejs, you have to do res.render(filename, jsObjToSend)
app.get('/profile/:name', function(req, res) {
  var dummyData = {
    age: 29,
    job: 'ninja',
    hobbies: ['eating', 'fighting', 'fishing'],
  };
  res.render('profile', { person: req.params.name, data: dummyData });
});

app.listen(3000);

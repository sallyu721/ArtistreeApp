
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')



// ROUTES ---- var user = require('./routes/user');
var login = require('./routes/login');
var register = require('./routes/register');
var home = require('./routes/home');
var collection = require('./routes/collection');
var add_projects = require('./routes/add_projects');
var add_entries = require('./routes/add_entries');


var homeTest = require('./routes/homeTest');
var add_projectsTest = require('./routes/add_projectsTest');
var add_entriesTest = require('./routes/add_entriesTest');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// GET ROUTES ---- app.get('/users', user.list);
app.get('/', login.view);
app.get('/register', register.view);
app.get('/home', home.view);
app.get('/collection', collection.view);
app.get('/add_projects', add_projects.view);
app.get('/add_entries', add_entries.view);

app.get('/homeTest', homeTest.view);
app.get('/add_projectsTest', add_projectsTest.view);
app.get('/add_entriesTest', add_entriesTest.view);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
}); 

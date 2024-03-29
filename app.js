
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'handlebars');
  app.set("view options", {layout: false});
  app.register('.html', require('handlebars'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res){

    var data = {
        name: "Ford Prefect",
        home: "a small planet somewhere in the vicinity of Betelgeuse"
    };

    res.render('index.html', data);
});

app.get('/test', function(req, res){

    var data = {
        name: "Test Page!",
        home: "a small planet somewhere in the vicinity of Betelgeuse",
	uri: encodeURI('http://ec2-184-73-143-220.compute-1.amazonaws.com:59634/')
    };
    

    res.render('index.html', data);
});


//app.listen(3000);
app.listen(59634, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

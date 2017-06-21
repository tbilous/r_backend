var express = require('express');
var application = express();

var cors = require('cors');

var posts = require('./data').posts;

application.use(cors());

application.get('/', function(req, res) {
  res.json(posts)
});

application.get('/posts/:id', function(req, res) {
  res.json(posts[req.params.id-1]);
});

application.listen(4000, function() {
  console.log('Server on 4000')
});

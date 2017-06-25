var express = require('express');
var application = express();

var cors = require('cors');

var posts = require('./data').posts;
var meta = require('./data').meta;

application.use(cors());

application.get('/posts/:id', function(req, res) {
  res.json(posts[req.params.id-1]);
});

application.get('/posts/', function(req, res) {
  if (req.query.search) {
    var searchTerm = req.query.search;
    var result = posts.filter(post => {
      return post.text.toLowerCase().indexOf(searchTerm.toLowerCase()) > - 1;
    });
    return res.json({meta: meta, posts: result});
  } else {
    res.json({meta: meta, posts: posts})
  }
});

application.listen(4000, function() {
  console.log('Server on 4000')
});

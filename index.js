var express = require('express');
var server = express();
var options = {
  index: 'index.html'
};

server.use('/', express.static('/home/site/wwwroot', options));

server.use('/intro', express.static('/home/site/wwwroot', options));
server.use('/nighttime', express.static('/home/site/wwwroot', options));
server.use('/daytime', express.static('/home/site/wwwroot', options));

console.log("node - listening on port " + process.env.PORT);

server.listen(process.env.PORT);
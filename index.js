const express = require('express'),
     http = require('http');

const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;
const estudianteRouter = require('./routes/estudianteRouter');

const app = express();
app.use(morgan('dev'));
app.use('/profesores', estudianteRouter);
app.use(express.static(__dirname + '/public'));

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
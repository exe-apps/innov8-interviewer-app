const http = require('http');
const app = require('./app');

const port = process.env.REQ_API_PORT || 7070;

const server = http.createServer(app);

server.listen(port);
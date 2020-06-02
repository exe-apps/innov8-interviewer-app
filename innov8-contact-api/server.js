const http = require('http');
const app = require('./app');

const port = process.env.CON_API_PORT || 6060;

const server = http.createServer(app);

server.listen(port);
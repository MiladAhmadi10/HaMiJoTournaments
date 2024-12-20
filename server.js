const http = require('http');
const app = require('./server/config/app'); 
const debug = require('debug')('hamijotournament:server');

//Set up the port
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//Create and start the server
const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val; 
  if (port >= 0) return port;
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') throw error;
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
  switch (error.code) {
    case 'EACCES': console.error(`${bind} requires elevated privileges`); process.exit(1);
    case 'EADDRINUSE': console.error(`${bind} is already in use`); process.exit(1);
    default: throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}

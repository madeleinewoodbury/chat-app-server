const express = require('express');
const socektio = require('socket.io');
const http = require('http');
const cors = require('cors');
const app = express();
const router = require('./router');

const server = http.createServer(app);
const io = socektio(server);

app.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

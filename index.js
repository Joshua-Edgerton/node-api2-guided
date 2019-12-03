const server = require('./api/server.js');
const express = require('express');

server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});

const express = require('express');
const app = express();

const { getFibonaciNumber } = require('./fibonaci.js');

app.get('/blocking', (_, res) => {
  const result = getFibonaciNumber(40);

  res.send('[GET] /blocking response. Result: ' + result);
});

app.get('/non-blocking', function (_, res) {
  res.send('[GET] /non-blocking response');
});

app.listen(3000);

console.log('Express started on port 3000');

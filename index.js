const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.get('/users', (req, res) => {
  res.sendFile(path.resolve('pages/users.html'));
});

app.get('/test', (req, res) => {
  console.log(req.query);
  let queryParams = Object.entries(req.query).reduce(
    (acc, [key, value]) => `${acc} <p>${key} = ${value}</p>`,
    ''
  );
  res.set('Content-Type', 'text/html');
  res.send(Buffer.from(queryParams));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const price = document.querySelector('#price');
const output = document.querySelector('.price-output');
output.textContent = price.value;
price.addEventListener('input', () => {
  output.textContent = price.value;
});

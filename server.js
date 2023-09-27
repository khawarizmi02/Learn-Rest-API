const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

const sayHi = (req, res) => {
  res.send('Hi Khawarizmi! This is main page');
};

const example = (req, res) => {
  res.send('example page');
};

app.get('/', sayHi);
app.get('/example', example);

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  res.send(`The sum is: ${a + b}`);
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

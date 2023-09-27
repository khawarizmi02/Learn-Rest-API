const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

const sayHi = (req, res) => {
  res.send('Hi Khawarizmi!');
};

app.get('/', sayHi);

app.post('/add', (req, res) => {
  const { a, b } = req.body;
  res.send(`The sum is: ${a + b}`);
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

const express = require('express');
const app = express();
const PORT = 5001;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');

app.use(morgan('default'));

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/public', express.static('public'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});


app.listen(process.env.PORT || PORT, () => {
  console.log('listening on ' + PORT);
});
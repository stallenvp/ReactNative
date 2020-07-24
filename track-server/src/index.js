require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const bodyParser = require('body-parser');

const app = express();

// App middleware
app.use(bodyParser.json());

// Routes used by app
app.use(auth);

const mongoUri =
  'mongodb+srv://admin:passwordpassword@cluster0.o1i9r.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB Instance');
});
mongoose.connection.on('error', (err) => {
  console.log('Error connecting to Mongo with error:', err);
});

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Activated and listening on Port 3000');
});

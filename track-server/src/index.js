require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const trackRoutes = require('./routes/track');
const requireAuth = require('./middleware/requireAuth');
const bodyParser = require('body-parser');

const app = express();

// App middleware
app.use(bodyParser.json());

// Routes used by app
app.use(authRoutes);
app.use(trackRoutes);

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

app.get('/', requireAuth, (req, res, next) => {
  res.send(`Your email is: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log('Activated and listening on Port 3000');
});

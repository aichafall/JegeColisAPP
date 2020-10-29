const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const stuffRoutes = require('./routes/routecolis');
const userRoutes = require('./routes/user');

const uri = "mongodb+srv://aicha:passer@jegecolis.ywehn.mongodb.net/jegecolis";

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/jegecolis", { useNewUrlParser: true, useUnifiedTopology: true }); 
mongoose.connect('mongodb+srv://aicha:passer@jegecolis.ywehn.mongodb.net/jegecolis?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const connection = mongoose.connection;
 
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});
 
connection.on('error', (err) => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    process.exit();
});

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/api/colis', stuffRoutes);
app.use('/api/auth', userRoutes);



module.exports = app;
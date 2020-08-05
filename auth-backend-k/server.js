const express= require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// const Msg = require('./routes/api/messages');

const app = express();

//Bodyparser Middleware
app.use(express.json());

//Connect to Mongo
mongoose.connect("mongodb://localhost/sportsclub",{ useNewUrlParser: true, useCreateIndex:true,useUnifiedTopology: true})
.then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//Use routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/loginauth', require('./routes/api/loginauth'));
app.use('/api/form', require('./routes/api/cuform'));
app.use('/api/messages', require('./routes/api/messages'));
app.use('/api/profiles', require('./routes/api/profiles'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
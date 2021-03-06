const express = require('express');
const bodyParser = require('body-parser');
const mongoose =  require('mongoose');
const cors = require('cors')

require('dotenv').config();

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const vehicleRouter = require('./Routes/vehicle.routes');
const categoryeRouter = require('./Routes/category.routes');

app.use('/vehicleR', vehicleRouter);
app.use('/categoryR', categoryeRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connected successfully");
})

app.get('/home', (req,res) => {
    res.send('Hello World !')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
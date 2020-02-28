const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connected");
});

const tripRouter = require('./routes/trips');

app.use('/trips', tripRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
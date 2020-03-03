const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');



require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


//const staticFiles = express.static(path.join(__dirname, '../../client/build'))

//app.use(staticFiles);
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "mileage-app", "build")))

const uri = process.env.MONGOD_URL;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connected");
});

const tripRouter = require('./routes/trips');

app.use('/trips', tripRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "mileage-app", "build", "index.html"));
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


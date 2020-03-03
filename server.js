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


const uri = process.env.MONGODB_URI;
mongoose.connect('mongodb+srv://harry:164d4f@cluster0-kenzv.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connected");
});

const tripRouter = require('./routes/trips');

app.use('/trips', tripRouter);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "mileage-app", "build")))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "mileage-app", "build", "index.html"));
    })
}


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();

const app = require('./index');

// database connection

const mongoURI = "mongodb+srv://salatussadik123:8cqOvaNcgeQIVSj6@cluster0.lfqkuh2.mongodb.net/?retryWrites=true&w=majority"

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log("error")
    console.error('Error connecting to MongoDB:', error);
  });

// sarver

const port = process.env.PORT || 5000;


app.listen(port, () => {
  console.log(`App is running on port ${port}.yellow.bold`)
})

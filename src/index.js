require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const authMiddleware = require('./middleware/authMiddleware');
const authRouter = require('./routers/auth');
const locationsRouter = require('./routers/locations');

const app = express();

app.use(cors({ credentials: true, origin: process.env.WHITELIST_ORIGIN }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRouter);

app.use('/locations', authMiddleware);
app.use('/locations', locationsRouter);


async function initialize() {
  // 1. Connect to the database
  await mongoose.connect(
    `mongodb+srv://dcohen1999:${process.env.MONGODB_PASSWORD}@ctg-cluster.xntd2.mongodb.net/ctg-internship?retryWrites=true&w=majority
    `,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  // 2. Serve API
  const port = process.env.PORT || 3000;
  app.listen(port, (error) => {
    if (error) {
      return console.error(error);
    }

    console.log(`Listetning to new connections on port ${port}`);
  });
}

initialize();

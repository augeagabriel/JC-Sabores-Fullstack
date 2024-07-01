const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db/db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
const userRouter = require('./src/routers/userRouter');
app.use('/api', userRouter);

// iniciar server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Serve encendido en port ${PORT}`);
});

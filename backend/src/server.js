const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
require('dotenv').config();

require('./database');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(routes);

app.listen(3000);

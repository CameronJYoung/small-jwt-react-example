require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jsonwebtoken = require('jsonwebtoken');
const port = process.env.API_PORT;

// Initialize app

const app = express();
app.use(express.urlencoded({
	extended: true,
}));
app.use(express.json());
app.use(cors());

// Initialize database

const db = require('./app/models');

db.sequelize.sync();

// Routes

// Entry Route
app.get('/', (request, response) => {
	response.send({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/testing', (request, response) => {
	response.json({
		token: '11',
	});
});

require('./app/routes/users.routes')(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/products.routes')(app);

// Listen for requests

app.listen(port, () => {
	console.log(`App running on port ${port}.`); // eslint-disable-line no-console
});

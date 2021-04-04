require('dotenv').config();
const express = require('express');
const jwt = require('express-jwt');
const cors = require('cors');
const jsonwebtoken = require('jsonwebtoken');

const port = process.env.API_PORT;
const jwtSecret = 'secret123';

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

app.get('/jwt', (request, response) => {
	response.json({
		token: jsonwebtoken.sign({ user: 'johndoe' }, jwtSecret),
	});
});

app.get('/testing', (request, response) => {
	response.json({
		token: '11',
	});
});

app.use(jwt({ secret: jwtSecret, algorithms: ['HS256'] }));

require('./app/routes/users.routes')(app);
require('./app/routes/products.routes')(app);

// Listen for requests

app.listen(port, () => {
	console.log(`App running on port ${port}.`); // eslint-disable-line no-console
});

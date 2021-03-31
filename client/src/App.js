import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import './App.css';

import Nav from './components/Nav/Nav'

import Home from './pages/Home/Home'
import Products from './pages/Products/Products'

axios.interceptors.request.use(
	config => {
		const {origin} = new URL(config.url);
		const allowedOrigins = ['http://localhost:9001']
		const token = localStorage.getItem('token');

		if (allowedOrigins.includes(origin)) {
			config.headers.authorization = `Bearer ${token}`
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
)

function App() {

	const storedJwt = localStorage.getItem('token');
	const [jwt, setJwt] = useState(storedJwt || null);
	const [products, setProducts] = useState([])
	const [fetchError, setFetchError] = useState(null)

	const getJwt = async () => {
		const {data} = await axios.get('http://localhost:9001/jwt');
		localStorage.setItem('token', data.token);
		setJwt(data.token);
	};

	const getProducts = async () => {
		try {
			const {data} = await axios.get('http://localhost:9001/products')
			setProducts(data);
			setFetchError(null)
		} catch (err) {
			setFetchError(err.message);
		}
	}

	return (
		<div className="App">
			<Router>
				<Nav></Nav>
				<div className="Maincontent">
					<Switch>
						<Route path="/products" component={Products}></Route>
						<Route path="/" render={(props) => (
							<Home {...props} getJwt={getJwt} jwt={jwt}></Home>
						)}></Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;

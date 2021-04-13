import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

import Nav from './components/Nav/Nav'

import Home from './pages/Home/Home'
import Products from './pages/Products/Products'

class App extends React.Component {
	// constructor(props) {
	// 	super(props)


	// }

	render() {
		return (
			<div className="App">
				<Router>
					<Nav></Nav>
					<div className="Maincontent">
						<Switch>
							<Route path="/products" render={(props) => (
								<Products></Products>
							)}></Route>
							<Route path="/" render={(props) => (
								<Home></Home>
							)}></Route>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;

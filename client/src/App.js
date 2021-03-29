import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css';

import Nav from './components/Nav/Nav'

import Home from './pages/Home/Home'
import Products from './pages/Products/Products'

function App() {
	return (
		<div className="App">
			<Router>
				<Nav></Nav>
				<Switch>
					<Route path="/products" component={Products}></Route>
					<Route path="/" component={Home}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

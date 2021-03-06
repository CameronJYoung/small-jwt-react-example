import { Component, useEffect } from 'react';
import {logIn} from '../../modules/Auth/Auth';
import './Home.css';

class Home extends Component{

	constructor(props) {
		super(props)
		this.state = { name: '', password: '', token: null, setToken: ''}
	}

	

	nameChangeHandler = (event) => {
		this.setState({name: event.target.value});
	}

	passwordChangeHandler = (event) => {
		this.setState({password: event.target.value});
	}

	// setToken = (name, password) => {

	// 	const data = ;
	// 	console.log(data);
		
	// }

	render() {
		return (
			<>
				<h1>Home</h1>
				<div className="logInContainer">
					<h2>Log In</h2>
					<form onSubmit={(event) => {
						event.preventDefault()
						//this.setState({token: logIn(this.state.name, this.state.password)});
						logIn(this.state.name, this.state.password).then(T => {
							this.setState({token: T})
						})
						
						}}>
						<label htmlFor="logInUserEmail">Email or Username:</label>
						<br></br><br></br>
						<input onChange={this.nameChangeHandler} type="text" name="logInUserEmail" id="logInUserEmail"></input>
						<br></br><br></br>
						<label htmlFor="logInPassword">Password:</label>
						<br></br><br></br>
						<input onChange={this.passwordChangeHandler} type="text" name="logInPassword" id="logInPassword"></input>
						<br></br><br></br>
						<input type="submit" value="Submit"></input>
						<p>
							{this.state.token}
						</p>
					</form>
				</div>

				<div className="signUpContainer">
					<h2>Sign Up</h2>
					<form>
						<label htmlFor="signUpUser">Username:</label>
						<br></br><br></br>
						<input type="text" name="signUpUser" id="signUpUser"></input>
						<br></br><br></br>
						<label htmlFor="signUpEmail">Email:</label>
						<br></br><br></br>
						<input type="text" name="signUpEmail" id="signUpEmail"></input>
						<br></br><br></br>
						<label htmlFor="signUpPassword">Password:</label>
						<br></br><br></br>
						<input type="text" name="signUpPassword" id="signUpPassword"></input>
						<br></br><br></br>
						<label htmlFor="signUpConfirmPassword">Confirm Password:</label>
						<br></br><br></br>
						<input type="text" name="signUpConfirmPassword" id="signUpConfirmPassword"></input>
						<br></br><br></br>
						<input type="submit" value="Submit"></input>
					</form>
				</div>
			</>  
		);
	  }


}

export default Home;

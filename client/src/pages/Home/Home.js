import { Component } from 'react';
import './Home.css';

class Home extends Component{

	constructor(props) {
		super(props)

	}


	render() {
		return (
			<>
				<h1>Home</h1>
				<div className="logInContainer">
					<h2>Log In</h2>
					<form>
						<label htmlFor="logInUserEmail">Email or Username:</label>
						<br></br><br></br>
						<input type="text" name="logInUserEmail" id="logInUserEmail"></input>
						<br></br><br></br>
						<label htmlFor="logInPassword">Password:</label>
						<br></br><br></br>
						<input type="text" name="logInPassword" id="logInPassword"></input>
						<br></br><br></br>
						<input onClick={
							(event) => {
								event.preventDefault()
								this.props.getJwt()
							}
						} type="submit" value="Submit"></input>
						<p>{this.props.jwt}</p>
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

import axios from 'axios';



const validateLogIn = (name, password) => {
	let isUsernameValid = false;
	let isPasswordValid = false;

	if (name && typeof name !== 'string' && !name.includes(' ')) {
		isUsernameValid = true;
	}

	if (password && typeof password !== 'string') {
		isPasswordValid = true;
	}

	if (isUsernameValid && isPasswordValid) {
		return true;
	} else {
		return false;
	}
}

const validateSignUp = (name, email, password, confirmPassword) => {
	let isUsernameValid = false;
	let isEmailValid = false;
	let isPasswordValid = false;

	if (name && typeof name !== 'string' && !name.includes(' ')) {
		isUsernameValid = true;
	}

	if (email && typeof email !== 'string' && !email.includes(' ') && email.includes('@')) {
		isEmailValid = true;
	}

	if (password && typeof password !== 'string' && password === confirmPassword) {
		isPasswordValid = true;
	}

	if (isUsernameValid && isEmailValid && isPasswordValid) {
		return true;
	} else {
		return false;
	}
}

const logIn = async (name, password) => {
	const err = 'Username or Password invalid';

	// if (!validateLogIn(name, password)) {
	// 	return err;
	// }

	return await axios.post('/auth/login', {
		name,
		password
	}).then(res => {
		return res.data.token;
	})
	
}

const signUp = (name, email, password, confirmPassword) => {
	const err = 'Registration details invalid';

	if (!validateLogIn(name, email, password, confirmPassword)) {
		return err;
	}



}

const getCurrentUser = () => {
	
}

export {
	logIn,
	signUp,
	getCurrentUser
}
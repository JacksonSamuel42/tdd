import React, {useState} from 'react';
import axios from 'axios';

const SignUpPage = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');

	let disabled = true;
	if (password && passwordRepeat) disabled = password !== passwordRepeat;

	const handleSubmit = () => {
		const body = {username, email, password};
		// axios.post('/api/1.0/users', body);
    fetch('/api/1.0/users', {
      method: "POST",
      headers: {
        "content": "application/json"
      },
      body: JSON.stringify(body)
    })
	};

	return (
		<div>
			<h1>Sign Up</h1>

			<form onSubmit={(event) => event.preventDefault()}>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					name='username'
					id='username'
					placeholder='username'
					value={username}
					onChange={({target}) => setUsername(target.value)}
				/>

				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					id='email'
					placeholder='email'
					value={email}
					onChange={({target}) => setEmail(target.value)}
				/>

				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					id='password'
					placeholder='password'
					value={password}
					onChange={({target}) => setPassword(target.value)}
				/>

				<label htmlFor='password-repeat'>Password Repeat</label>
				<input
					type='password'
					name='password-repeat'
					id='password-repeat'
					placeholder='password-repeat'
					value={passwordRepeat}
					onChange={({target}) => setPasswordRepeat(target.value)}
				/>

				<button onClick={handleSubmit} disabled={disabled}>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default SignUpPage;

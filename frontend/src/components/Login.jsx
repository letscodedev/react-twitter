import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import firebase from "../config";
import "./Login.css";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		document.title = "Login on Twitter / Twitter";
	}, []);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		console.log(username);
		console.log(password);
		firebase
			.auth()
			.signInWithEmailAndPassword(username, password)
			.then((user) => {
				console.log(user.user);
			})
			.catch((error) => {
				console.log(error.code);
				console.log(error.message);
			});
	};

	const handleChange = (e) => {
		if (e.target.name === "username") {
			setUsername(e.target.value);
		} else if (e.target.name === "password") {
			setPassword(e.target.value);
		}
	};

	return (
		<div className="login">
			<div>
				<div className="login__logo">
					<img
						style={{ width: "40px" }}
						src="./assets/twitter.png"
						alt="Twitter Logo"
					/>
				</div>
				<div className="login__form">
					<h1>Log in to Twitter</h1>
					<Form
						onSubmit={(e) => handleOnSubmit(e)}
						autoComplete="off"
					>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								name="username"
								type="email"
								value={username}
								required
								placeholder="Enter email"
								onChange={(e) => handleChange(e)}
							/>
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								value={password}
								name="password"
								type="password"
								required
								placeholder="Password"
								onChange={(e) => handleChange(e)}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>
						<Button
							type="submit"
							disabled={username && password ? false : true}
						>
							Log in
						</Button>
					</Form>
				</div>
				<div className="login__signup">
					<span style={{ cursor: "pointer" }}>Forgot password?</span>
					<span> · </span>
					<span style={{ cursor: "pointer" }}>
						Sign up for Twitter
					</span>
				</div>
			</div>
		</div>
	);
}

export default Login;

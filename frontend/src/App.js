import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { auth } from "./config";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Main from "./components/Main";
import Login from "./components/Login";
import Home from "./components/Home";
import Loading from "./components/Loading";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
				setIsLoading(false);
			} else {
				dispatch(logout());
				setIsLoading(false);
			}
		});
		return unsubscribe;
	}, []);

	return (
		<div className="App">
			{isLoading ? (
				<Loading />
			) : (
				<Router>
					{user ? <Redirect to="/home" /> : null}
					<Switch>
						<Route exact path="/">
							<Main />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
					</Switch>
				</Router>
			)}
		</div>
	);
}

export default App;

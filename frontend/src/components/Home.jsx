import React from "react";
import { Button } from "react-bootstrap";
import { auth } from "../config";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";

function Home() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const handleLogOut = (e) => {
		console.log("Signing out");
		auth.signOut();
		dispatch(logout());
	};

	return (
		<div className="home">
			{user ? (
				<>
					Home
					<Button onClick={() => handleLogOut()}>Logout</Button>
				</>
			) : (
				<Redirect to="/" />
			)}
		</div>
	);
}

export default Home;

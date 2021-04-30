import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { auth } from "../config";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";

import Left from "./HomeLeft";
import Post from "./HomeMiddle";
import Right from "./HomeRight";

import "./Home.css";

function Home() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		document.title = "Home / Twitter";
	}, []);

	const handleLogOut = (e) => {
		console.log("Signing out");
		auth.signOut();
		dispatch(logout());
	};

	return (
		<div className="home">
			{user ? (
				<>
					<div className="container">
						<div className="row">
							<div className="left col-md-3">
								<div className="sticky-top">
									<Left />
									<Button onClick={() => handleLogOut()}>
										Logout
									</Button>
								</div>
							</div>
							<div className="post col-md-6">
								<Post />
							</div>
							<div className="right col-md-3 sticky-top">
								<div className="sticky-top">
									<Right />
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<Redirect to="/" />
			)}
		</div>
	);
}

export default Home;

import React from "react";
import "./Main.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Main() {
	return (
		<div className="main">
			<div className="main__container">
				<Row>
					<Col>
						<div className="main__image">
							<img
								src="./assets/twitter_front.PNG"
								alt="Twitter Logo"
							/>
						</div>
					</Col>
					<Col>
						<div className="main__user">
							<div className="twitter__logo">
								<img
									style={{ width: "40px" }}
									src="./assets/twitter.png"
									alt="Twitter Logo"
								/>
							</div>
							<div className="main__title">
								<h1>Happening now</h1>
							</div>
							<div className="main__subtitle">
								<h1>Join Twitter today.</h1>
							</div>
							<div className="main__buttons">
								<div className="main__signup">Sign up</div>
								<Link to="/login">
									<div className="main__login">Login</div>
								</Link>
							</div>
						</div>
					</Col>
				</Row>
			</div>
			<div className="main__footer">
				About Help Center Terms of Service Privacy Policy Cookie Policy
				Ads Info Blog Status Careers Brand Resources Advertising
				Marketing Twitter for Business Developers Directory Settings
				&copy; 2021 Twitter.Inc
			</div>
		</div>
	);
}

export default Main;

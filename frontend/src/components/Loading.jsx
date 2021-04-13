import React from "react";
import "./Loading.css";

function Loading() {
	return (
		<div className="loading">
			<img
				className="loading__logo"
				src="./assets/twitter__logo.png"
				alt="Twitter Logo"
			/>
		</div>
	);
}

export default Loading;

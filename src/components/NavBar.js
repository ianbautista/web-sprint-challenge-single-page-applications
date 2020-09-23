import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div className="navBarDiv">
			<h1> LAMBDA EATS </h1>
			<nav className="navLinks">
				<Link id="navHome" to="/">
					Home
				</Link>
				<Link id="navHelp" to="/help">
					Help
				</Link>
			</nav>
		</div>
	);
}

import React from "react";
import { Link } from "react-router-dom";

export default function Confirmation(props) {
	const { details } = props;
	if (!details) {
		return <h3>Working fetching your order details...</h3>;
	}
	return (
		<div className="App container">
			<h2> Thank you for your order! </h2>
			<h3>Hi {details.name}! See your order below:</h3>
			<p>Name: {details.name}</p>
			<p>Sauce: {details.sauce}</p>
			{!!details.toppings && !!details.toppings.length && (
				<div>
					Toppings:
					<ul>
						{details.toppings.map((pick, i) => (
							<li key={i}>{pick}</li>
						))}
					</ul>
				</div>
			)}
			<p>Instructions: {details.instructions}</p> <br />
			<Link id="navHome" to="/">
				<h2>Home</h2>
			</Link>
		</div>
	);
}

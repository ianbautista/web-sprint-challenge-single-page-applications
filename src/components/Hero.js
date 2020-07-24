import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
	return (
		<div className="heroDiv">
			<h2> Your favorite food, delivered while coding </h2>
			<div className="heroPizzaLinkDiv">
				<Link id="pizzaLink" to="/pizza">
					Pizza?
				</Link>
			</div>
		</div>
	);
}

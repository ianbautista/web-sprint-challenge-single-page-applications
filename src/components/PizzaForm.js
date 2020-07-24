import React from "react";
import { Link } from "react-router-dom";

export default function PizzaForm() {
	const initialFormValues = {
		// text
		name: "",
		// dropdown
		size: "",
		// radio
		sauce: "",
		// checkbox
		toppings: {
			pepperoni: false,
			sausage: false,
			canadianBacon: false,
			spicyItalianSausage: false,
			grilledChicken: false,
			onions: false,
			greenPepper: false,
			dicedTomatos: false,
			blackOlives: false,
			roastedGarlic: false,
			artichokeHearts: false,
			threeCheese: false,
			pineapple: false,
			mushroom: false,
		},
		// textbox for special instructions
		instructions: "",
	};

	return (
		<div className="pizzaFormDiv">
			<h2> Build Your Own Pizza </h2>
			<img alt="pizza" />
			<h3>Build Your Own Pizza</h3>
			<form action="">
				<label htmlFor="name">
					Name:&nbsp;&nbsp;
					<input
						id="nameInput"
						name="name"
						type="text"
						placeholder="Your last name here"
						maxLength="40"
					/>
				</label>
				<br />
				<label htmlFor="size">
					{" "}
					Choice of Size
					<select name="size" id="sizeInput">
						<option value="" selected disabled>
							- select size -
						</option>
						<option value="small">small</option>
						<option value="medium">medium</option>
						<option value="large">large</option>
						<option value="x-large">x-large</option>
					</select>
				</label>
				<br />
				<h4>Choice of Sauce </h4>
				<input name="sauce" type="radio" value="Original Red" />
				<label htmlFor="sauce">Original Red</label>
				<br />
				<input name="sauce" type="radio" value="Garlic Ranch" />
				<label htmlFor="sauce">Garlic Ranch</label>
				<br />
				<input name="sauce" type="radio" value="BBQ Sauce" />
				<label htmlFor="sauce">BBQ Sauce</label>
				<br />
				<input name="sauce" type="radio" value="Spinach Alfredo" />
				<label htmlFor="sauce">Spinach Alfredo</label>
				<br />
				<div className="toppingsDiv">
					<h4>Add Toppings</h4>
					<label htmlFor="pepperoni">Pepperoni</label>
					<input name="pepperoni" type="checkbox" />
				</div>
			</form>

			<Link id="navHome" to="/">
				Home
			</Link>
			<Link id="navHelp" to="/help">
				Help
			</Link>
		</div>
	);
}

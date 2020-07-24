import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Switch, Route, useHistory } from "react-router-dom";
import axios from "axios";

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

const initialErrorValues = {
	name: "",
	size: "",
};

const initialOrders = [];
const initialDisabled = true;

export default function PizzaForm() {
	const [orders, setOrders] = useState(initialOrders);
	const [formValues, setFormValues] = useState(initialFormValues);
	const [efforState, setErrorState] = useState(initialErrorValues);
	const [disabled, setDisabled] = useState(initialDisabled);

	return (
		<>
			<NavBar />
			<div className="pizzaFormDiv">
				<h2> Build Your Own Pizza </h2>
				<div className="formImgDiv">
					<img
						id="pizzaImgForm"
						src="http://www.thepizzadavinci.com/facebookimages/Pizza3.jpg"
						alt="pizza"
					/>
				</div>
				<h3>Build Your Own Pizza</h3>
				<form action="">
					<label htmlFor="name">
						Name:&nbsp;&nbsp;
						<input
							id="nameInput"
							name="name"
							type="text"
							placeholder="Your name here"
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
						<input name="pepperoni" type="checkbox" />
						<label htmlFor="pepperoni">Pepperoni</label> <br />
						<input name="sausage" type="checkbox" />
						<label htmlFor="sausage">Sausage</label> <br />
						<input name="canadianBacon" type="checkbox" />
						<label htmlFor="canadianBacon">Canadian Bacon</label> <br />
						<input name="spicyItalianSausage" type="checkbox" />
						<label htmlFor="spicyItalianSausage">Spicy Italian Sausage</label> <br />
						<input name="grilledChicken" type="checkbox" />
						<label htmlFor="grilledChicken">Grilled Chicken</label> <br />
						<input name="onions" type="checkbox" />
						<label htmlFor="onions">Onions</label> <br />
						<input name="greenPepper" type="checkbox" />
						<label htmlFor="greenPepper">Green Pepper</label> <br />
						<input name="dicedTomatos" type="checkbox" />
						<label htmlFor="dicedTomatos">Diced Tomatos</label> <br />
						<input name="blackOlives" type="checkbox" />
						<label htmlFor="blackOlives">Black Olives</label> <br />
						<input name="roastedGarlic" type="checkbox" />
						<label htmlFor="roastedGarlic">Roasted Garlic</label> <br />
						<input name="artichokeHearts" type="checkbox" />
						<label htmlFor="artichokeHearts">Artichoke Hearts</label> <br />
						<input name="threeCheese" type="checkbox" />
						<label htmlFor="threeCheese">Three Cheese</label> <br />
						<input name="pineapple" type="checkbox" />
						<label htmlFor="pineapple">Pineapple</label> <br />
						<input name="mushroom" type="checkbox" />
						<label htmlFor="mushroom">Mushroom</label> <br />
					</div>
					<label htmlFor="instructions">
						Special Instructions&nbsp;&nbsp;
						<input
							id="instructions"
							name="instructions"
							type="text"
							placeholder="Anything else you'd like to add?"
							maxLength="1000"
						/>
					</label>
				</form>

				<button>Add to Order</button>
			</div>
		</>
	);
}

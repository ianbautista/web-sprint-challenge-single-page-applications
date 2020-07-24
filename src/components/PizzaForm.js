import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Switch, Route, useHistory } from "react-router-dom";
import axios from "axios";
import formSchema from "./formSchema";
import * as yup from "yup";

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
	const [errorState, setErrorState] = useState(initialErrorValues);
	const [disabled, setDisabled] = useState(initialDisabled);

	useEffect(() => {
		formSchema.isValid(formValues).then((valid) => {
			setDisabled(!valid);
		});
	}, [formValues]);

	const validateChange = (event) => {
		yup
			.reach(formSchema, event.target.name)
			.validate(event.target.value)
			.then(() => {
				setErrorState({
					...errorState,
					[event.target.name]: "",
				});
			})
			.catch((error) => {
				setErrorState({
					...errorState,
					[event.target.name]: error.errorState,
				});
			});
	};

	const formSubmit = (event) => {
		event.preventDefault();
		axios
			.post("https://reqres.in/api/users", formValues)
			.then((response) => {
				setOrders([...orders, response.data]);
				console.log("success", orders);

				setFormValues(initialFormValues);
			})
			.catch((error) => {
				debugger;
				console.log(error);
				alert(`Oops! We have a problem my friend. ${error}`);
			});
	};

	const inputChange = (event) => {
		event.persist();

		const newFormData = {
			...formValues,
			[event.target.name]:
				event.target.type === "checkbox" ? event.target.checked : event.target.value,
		};
		validateChange(event);
		setFormValues(newFormData);
	};

	const onCheckboxChange = (event) => {
		const { name, checked } = event.target;
		setFormValues({
			...formValues,
			toppings: {
				...formValues.toppings,
				[name]: checked,
			},
		});
	};

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
				<form onSubmit={formSubmit}>
					<label htmlFor="name">
						Name:&nbsp;&nbsp;
						<input
							id="nameInput"
							name="name"
							type="text"
							placeholder="Your name here"
							maxLength="40"
							value={formValues.name}
							onChange={inputChange}
						/>
					</label>
					<br />
					<label htmlFor="size">
						{" "}
						Choice of Size
						<select name="size" id="sizeInput" value={formValues.size} onChange={inputChange}>
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
					<input name="sauce" type="radio" value="Original Red" checked="checked" />
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
						<input
							name="pepperoni"
							type="checkbox"
							checked={formValues.pepperoni}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="pepperoni">Pepperoni</label> <br />
						<input
							name="sausage"
							type="checkbox"
							checked={formValues.sausage}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="sausage">Sausage</label> <br />
						<input
							name="canadianBacon"
							type="checkbox"
							checked={formValues.canadianBacon}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="canadianBacon">Canadian Bacon</label> <br />
						<input
							name="spicyItalianSausage"
							type="checkbox"
							checked={formValues.spicyItalianSausage}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="spicyItalianSausage">Spicy Italian Sausage</label> <br />
						<input
							name="grilledChicken"
							type="checkbox"
							checked={formValues.grilledChicken}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="grilledChicken">Grilled Chicken</label> <br />
						<input
							name="onions"
							type="checkbox"
							checked={formValues.onions}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="onions">Onions</label> <br />
						<input
							name="greenPepper"
							type="checkbox"
							checked={formValues.greenPepper}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="greenPepper">Green Pepper</label> <br />
						<input
							name="dicedTomatos"
							type="checkbox"
							checked={formValues.dicedTomatos}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="dicedTomatos">Diced Tomatos</label> <br />
						<input
							name="blackOlives"
							type="checkbox"
							checked={formValues.blackOlives}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="blackOlives">Black Olives</label> <br />
						<input
							name="roastedGarlic"
							type="checkbox"
							checked={formValues.roastedGarlic}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="roastedGarlic">Roasted Garlic</label> <br />
						<input
							name="artichokeHearts"
							type="checkbox"
							checked={formValues.artichokeHearts}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="artichokeHearts">Artichoke Hearts</label> <br />
						<input
							name="threeCheese"
							type="checkbox"
							checked={formValues.threeCheese}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="threeCheese">Three Cheese</label> <br />
						<input
							name="pineapple"
							type="checkbox"
							checked={formValues.pineapple}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="pineapple">Pineapple</label> <br />
						<input
							name="mushroom"
							type="checkbox"
							checked={formValues.mushroom}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="mushroom">Mushroom</label> <br />
					</div>
					<label htmlFor="instructions">
						Special Instructions&nbsp;&nbsp;
						<input
							id="instructions"
							name="instructions"
							type="textarea"
							placeholder="Anything else you'd like to add?"
							maxLength="1000"
							value={formValues.instructions}
							onChange={inputChange}
						/>
					</label>{" "}
					<br />
					<button name="submit" type="submit" disabled={disabled}>
						Add to Order
					</button>
				</form>
			</div>
		</>
	);
}

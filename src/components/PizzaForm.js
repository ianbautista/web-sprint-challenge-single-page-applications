import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function PizzaForm(props) {
	const {
		checkboxChange,
		inputChange,
		disabled,
		formSubmit,
		formValues,
		errorState,
		validateChange,
	} = props;

	const onSubmit = (event) => {
		event.preventDefault();
		formSubmit();
	};

	const onInputChange = (event) => {
		const { name, value } = event.target;
		inputChange(name, value);
	};

	const onValidateChange = (evt) => {
		const { name, value } = evt.target;
		validateChange(name, value);
	};

	const onCheckboxChange = (event) => {
		const { name, checked } = event.target;
		checkboxChange(name, checked);
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
				<form onSubmit={onSubmit}>
					<label htmlFor="name">
						Name:&nbsp;&nbsp;
						<input
							id="nameInput"
							name="name"
							type="text"
							placeholder="Your name here"
							maxLength="40"
							value={formValues.name}
							onChange={onValidateChange}
						/>
					</label>
					<div>{errorState.name}</div>
					<br />
					<label htmlFor="size">
						{" "}
						Choice of Size
						<select
							name="size"
							id="sizeInput"
							value={formValues.size}
							onChange={onInputChange}
						>
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
							checked={formValues.toppings.pepperoni === true}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="pepperoni">Pepperoni</label> <br />
						<input
							name="sausage"
							type="checkbox"
							checked={formValues.toppings.sausage === true}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="sausage">Sausage</label> <br />
						<input
							name="canadianBacon"
							type="checkbox"
							checked={formValues.toppings.canadianBacon === true}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="canadianBacon">Canadian Bacon</label> <br />
						<input
							name="spicyItalianSausage"
							type="checkbox"
							checked={formValues.toppings.spicyItalianSausage === true}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="spicyItalianSausage">Spicy Italian Sausage</label> <br />
						<input
							name="grilledChicken"
							type="checkbox"
							checked={formValues.toppings.grilledChicken === true}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="grilledChicken">Grilled Chicken</label> <br />
						<input
							name="onions"
							type="checkbox"
							checked={formValues.toppings.onions === true}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="onions">Onions</label> <br />
						<input
							name="greenPepper"
							type="checkbox"
							checked={formValues.toppings.greenPepper === true}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="greenPepper">Green Pepper</label> <br />
						<input
							name="dicedTomatos"
							type="checkbox"
							checked={formValues.toppings.dicedTomatos === true}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="dicedTomatos">Diced Tomatos</label> <br />
						<input
							name="blackOlives"
							type="checkbox"
							checked={formValues.toppings.blackOlives === true}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="blackOlives">Black Olives</label> <br />
						<input
							name="roastedGarlic"
							type="checkbox"
							checked={formValues.toppings.roastedGarlic === true}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="roastedGarlic">Roasted Garlic</label> <br />
						<input
							name="artichokeHearts"
							type="checkbox"
							checked={formValues.toppings.artichokeHearts === true}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="artichokeHearts">Artichoke Hearts</label> <br />
						<input
							name="threeCheese"
							type="checkbox"
							checked={formValues.toppings.threeCheese === true}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="threeCheese">Three Cheese</label> <br />
						<input
							name="pineapple"
							type="checkbox"
							checked={formValues.toppings.pineapple === true}
							onChange={onCheckboxChange}
						/>
						<label htmlFor="pineapple">Pineapple</label> <br />
						<input
							name="mushroom"
							type="checkbox"
							checked={formValues.toppings.mushroom === true}
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
					<Link id="confirmation" to="/confirmation">
						<button name="submit" type="submit" disabled={disabled}>
							Add to Order
						</button>
					</Link>
				</form>
			</div>
		</>
	);
}

import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import PizzaForm from "./components/PizzaForm";
import Help from "./components/Help";
import Confirmation from "./components/Confirmation";
import axios from "axios";
import formSchema from "./components/formSchema";
import * as yup from "yup";
import "./App.css";

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

const initialOrders = [];
const initialDisabled = true;

// END OF NEW CODE

const App = () => {
	// NEW CODE

	const [orders, setOrders] = useState(initialOrders);
	const [formValues, setFormValues] = useState(initialFormValues);
	const [errorState, setErrorState] = useState("");
	const [disabled, setDisabled] = useState(initialDisabled);

	const validateChange = (name, value) => {
		yup
			.reach(formSchema, name)

			.validate(value)

			.then((valid) => {
				setErrorState({
					...errorState,
					[name]: "",
				});
			})

			.catch((error) => {
				setErrorState({
					...errorState,
					[name]: error.errors[0],
				});
			});

		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	// const getOrders = () => {
	// 	axios
	// 		.get("https://reqres.in/api/users")
	// 		.then((response) => {
	// 			console.log(response);
	// 			setOrders(response.data.data);
	// 		})
	// 		.catch((error) => {
	// 			debugger;
	// 			console.log(error);
	// 			alert(`Oops! We have a problem my friend. ${error}`);
	// 		});
	// };

	const formSubmit = () => {
		const newOrder = {
			name: formValues.name.trim(),
			sauce: formValues.sauce,
			size: formValues.size,
			toppings: Object.keys(formValues.toppings).filter(
				(topping) => formValues.toppings[topping],
			),
			instructions: formValues.instructions,
		};

		axios
			.post("https://reqres.in/api/users", newOrder)
			.then((response) => {
				const ordersFromApi = response.data;
				console.log(ordersFromApi);
				setOrders([ordersFromApi, ...orders]);
				setFormValues(initialFormValues);
			})
			.catch((error) => {
				debugger;
				console.log(error);
				alert(`Oops! We have a problem my friend. ${error}`);
			});
	};

	const inputChange = (name, value) => {
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const checkboxChange = (name, isChecked) => {
		setFormValues({
			...formValues,
			toppings: {
				...formValues.toppings,
				[name]: isChecked,
			},
		});
	};

	useEffect(() => {
		formSchema.isValid(formValues).then((valid) => {
			setDisabled(!valid);
		});
	}, [formValues]);

	// useEffect(() => {
	// 	getOrders();
	// }, []);

	// END OF NEW CODE
	return (
		<>
			<div className="">
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
					<Route path="/help">
						<Help />
					</Route>
					<Route path="/pizza">
						<PizzaForm
							checkboxChange={checkboxChange}
							inputChange={inputChange}
							disabled={disabled}
							formSubmit={formSubmit}
							formValues={formValues}
							errorState={errorState}
							validateChange={validateChange}
						/>
					</Route>
					<Route path="/confirmation">
						<Confirmation details={orders} />;
					</Route>
				</Switch>
			</div>
		</>
	);
};
export default App;

import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import PizzaForm from "./components/PizzaForm";
import Help from "./components/Help";

const App = () => {
	return (
		<>
			<div className="">
				<Route exact path="/">
					<Homepage />
				</Route>
				<Route path="/help">
					<Help />
				</Route>
				<Route path="/pizza">
					<PizzaForm />
				</Route>
			</div>
		</>
	);
};
export default App;

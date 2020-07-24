import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import PizzaForm from "./components/PizzaForm";

const App = () => {
	return (
		<>
			<Homepage />
			<div className="App">
				<Route path="/pizza">
					<PizzaForm />
				</Route>
			</div>
		</>
	);
};
export default App;

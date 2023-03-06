import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Register from "./pages/Register";
import "./App.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={ <Main /> }/>
			<Route path="/register" element={ <Register /> }/>
		</Routes>
	);
}

export default App;

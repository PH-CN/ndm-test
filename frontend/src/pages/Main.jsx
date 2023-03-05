import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Main() {
	return (
		<nav>
			<Link to="register" className="mainPageLink">Cadastre um Time</Link>
			<Link to="teams" className="mainPageLink">Times cadastrados</Link>
		</nav>
	);
}
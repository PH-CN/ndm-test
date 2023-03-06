import React from "react";
import { Link } from "react-router-dom";
import "../App.css";



export default function Main() {	
	return (
		<nav>
			<div>
				<Link to="register" className="mainPageLink">Cadastre um Time</Link>
			</div>
			<div>
				<Link to="teams" className="mainPageLink">Times cadastrados</Link>
			</div>
		</nav>
	);
}
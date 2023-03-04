import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Main() {
	return (
		<main>
			<Link className="mainPageLink">Cadastre um Time</Link>
			<Link className="mainPageLink">Times cadastrados</Link>
		</main>
	);
}
import React, { useState } from "react";
import "../App.css";

const initialValues = {
	teamName: "",
	playerOne: "",
	playerTwo: "",
	playerThree: "",
	playerFour: "",
	playerFive: "",
};


export default function Register() {
	const [values, setValues] = useState(initialValues);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
	
		setValues({
			...values,
			[name]: value,
		});
	};

	return (
		<div className="register">
			<h1 className="text-center">Registre um time!</h1>

			<form>

				<div className="form-group">
					<label className="form-label" htmlFor="teamName">Nome do time</label>
					<input
						className="form-control"
						type="text"
						id="teamName"
						value={values.teamName}
						onChange={handleInputChange}
						name="teamName"
					/>
				</div>

				<div className="form-group">
					<label className="form-label" htmlFor="player1">Jogador 1</label>
					<input
						className="form-control"
						type="text"
						id="player1"
						value={values.playerOne}
						onChange={handleInputChange}
						name="playerOne"
					/>
				</div>

				<div className="form-group">
					<label className="form-label" htmlFor="player2">Jogador 2</label>
					<input
						className="form-control"
						type="text"
						id="player2"
						value={values.playerTwo}
						onChange={handleInputChange}
						name="playerTwo"
					/>
				</div>

				<div className="form-group">
					<label className="form-label" htmlFor="player3">Jogador 3</label>
					<input
						className="form-control"
						type="text"
						id="player3"
						name="playerThree"
						value={values.playerThree}
						onChange={handleInputChange}
					/>
				</div>

				<div className="form-group">
					<label className="form-label" htmlFor="player4">Jogador 4</label>
					<input
						className="form-control"
						type="text"
						id="player4"
						name="playerFour"
						value={values.playerFour}
						onChange={handleInputChange}
					/>
				</div>

				<div className="form-group">
					<label className="form-label" htmlFor="player5">Jogador 5</label>
					<input
						className="form-control"
						type="text"
						id="player5"
						name="playerFive"
						value={values.playerFive}
						onChange={handleInputChange}
					/>
				</div>

				<button className="btn btn-primary w-100" type="submit">Registrar</button>

			</form>
		</div>
	);
}
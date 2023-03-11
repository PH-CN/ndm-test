import axios from "axios";
import React, { useState } from "react";

const initialValues = {
	teamName: "",
	playerOne: "",
	playerOneAge: "",
	playerTwo: "",
	playerTwoAge: "",
	playerThree: "",
	playerThreeAge: "",
	playerFour: "",
	playerFourAge: "",
	playerFive: "",
	playerFiveAge: "",
};


export default function Register() {
	const [values, setValues] = useState(initialValues);
	const [errorMsg, setErrorMsg] = useState(null);

	const registerTeamAndPlayers = async (e) => {
		try {
			e.preventDefault();
			const response =	await axios.post("http://localhost:3001/register",
				{ nome: values.teamName });
			await axios.post("http://localhost:3001/registerplayers",
				{ ...values, teamId: response.data.id });
			setValues(initialValues);
		} catch(e) {
			setErrorMsg(e.response.data.message);
		}
	};

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
						value={ values.teamName }
						onChange={ handleInputChange }
						name="teamName"
						required
					/>
				</div>

				<div className="form-group">
					<label className="form-label" htmlFor="player1">Jogador 1</label>
					<input
						className="form-control"
						type="text"
						id="player1"
						value={ values.playerOne }
						onChange={ handleInputChange }
						name="playerOne"
						required
					/>
					<label htmlFor="player1Age">Idade Jogador 1</label>
					<input
						className="form-control"
						type="number"
						id="player1Age"
						value={ values.playerOneAge }
						onChange={ handleInputChange }
						name="playerOneAge"
						required
					/>
				</div>

				<div className="form-group">
					<label className="form-label" htmlFor="player2">Jogador 2</label>
					<input
						className="form-control"
						type="text"
						id="player2"
						value={ values.playerTwo }
						onChange={ handleInputChange }
						name="playerTwo"
						required
					/>
					<label htmlFor="player2Age">Idade Jogador 2</label>
					<input
						className="form-control"
						type="number"
						id="player2Age"
						value={ values.playerTwoAge }
						onChange={ handleInputChange }
						name="playerTwoAge"
						required
					/>
				</div>

				<div className="form-group">
					<label className="form-label" htmlFor="player3">Jogador 3</label>
					<input
						className="form-control"
						type="text"
						id="player3"
						name="playerThree"
						value={ values.playerThree }
						onChange={ handleInputChange }
						required
					/>
					<label htmlFor="player3Age">Idade Jogador 3</label>
					<input
						className="form-control"
						type="number"
						id="player3Age"
						value={ values.playerThreeAge }
						onChange={ handleInputChange }
						name="playerThreeAge"
						required
					/>
				</div>

				<div className="form-group">
					<label className="form-label" htmlFor="player4">Jogador 4</label>
					<input
						className="form-control"
						type="text"
						id="player4"
						name="playerFour"
						value={ values.playerFour }
						onChange={ handleInputChange }
						required
					/>
					<label htmlFor="player4Age">Idade Jogador 4</label>
					<input
						className="form-control"
						type="number"
						id="player4Age"
						value={ values.playerFourAge }
						onChange={ handleInputChange }
						name="playerFourAge"
						required
					/>
				</div>

				<div className="form-group">
					<label className="form-label" htmlFor="player5">Jogador 5</label>
					<input
						className="form-control"
						type="text"
						id="player5"
						name="playerFive"
						value={ values.playerFive }
						onChange={ handleInputChange }
						required
					/>
					<label htmlFor="player5Age">Idade Jogador 5</label>
					<input
						className="form-control"
						type="number"
						id="player5Age"
						value={ values.playerFiveAge }
						onChange={ handleInputChange }
						name="playerFiveAge"
						required
					/>
				</div>

				<button
					className="btn btn-primary w-100"
					type="submit"
					onClick={ registerTeamAndPlayers }
				>
					Registrar
				</button>
				{errorMsg && <div style={ { color: "red" } } > { errorMsg } </div>}

			</form>
		</div>
	);
}
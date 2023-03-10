import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Teams() {
	const [teams, setTeams] = useState([]);

	const getTeams = async () => {
		const response = await axios.get("http://localhost:3001/teamsWithPlayers");
		setTeams(response.data);
	};

	useEffect(() => {
		getTeams();
	}, []);

	const renderCard = (card, index) => {
		return (
			<Card key={ index } style={{ width: "18rem" }}>
				<Card.Header>{card.nome}</Card.Header>
				<ListGroup variant="flush">
					<ListGroup.Item>{card.players[0].nome}</ListGroup.Item>
					<ListGroup.Item>{card.players[1].nome}</ListGroup.Item>
					<ListGroup.Item>{card.players[2].nome}</ListGroup.Item>
					<ListGroup.Item>{card.players[3].nome}</ListGroup.Item>
					<ListGroup.Item>{card.players[4].nome}</ListGroup.Item>
				</ListGroup>
			</Card>
		);
	};

	return (
		<div>
			{ teams.length === 0 && <h1>No teams found</h1> }
			{ teams.map(renderCard) }
		</div>
	);
}
const express = require("express");

const { PrismaClient } = require("@prisma/client");

const playersRoutes = express.Router();

const prisma = new PrismaClient();

playersRoutes.post("/registerplayers", async function (req, res) {
	const {
		teamId,
		playerOne,
		playerOneAge,
		playerTwo,
		playerTwoAge,
		playerThree,
		playerThreeAge,
		playerFour,
		playerFourAge,
		playerFive,
		playerFiveAge } = req.body;

	const allPlayers = await prisma.player.findMany();
	const playersArray = [playerOne, playerTwo, playerThree, playerFour, playerFive];

	const playerExists = allPlayers.filter((player) => {
		for (let name of playersArray) {
			return name === player.nome;
		}
	});

	if (playerExists.length > 0) {
		await prisma.team.delete({
			where: {
				id: teamId
			}
		});
		return res.status(400).json({ "message": "some player already plays in a team" });
	}
 
	const parsedOne = parseInt(playerOneAge);
	const parsedTwo = parseInt(playerTwoAge);
	const parsedThree = parseInt(playerThreeAge);
	const parsedFour = parseInt(playerFourAge);
	const parsedFive = parseInt(playerFiveAge);

	const players = await prisma.player.createMany({
		data: [
			{ nome: playerOne, idade: parsedOne, time_id: teamId },
			{ nome: playerTwo, idade: parsedTwo, time_id: teamId},
			{ nome: playerThree, idade: parsedThree, time_id: teamId },
			{ nome: playerFour, idade: parsedFour, time_id: teamId },
			{ nome: playerFive, idade: parsedFive, time_id: teamId },
		]
	});

	return res.status(200).json(players);
});

playersRoutes.get("/players", async function (req, res) {
	const allPlayers = await prisma.player.findMany();

	return res.status(201).json(allPlayers);
});

module.exports = playersRoutes;
const express = require("express");

const { PrismaClient } = require("@prisma/client");

const teamsRoutes = express.Router();

const prisma = new PrismaClient();

teamsRoutes.post("/register", async function (req, res) {
	
	const { nome } = req.body;

	const allTeams = await prisma.team.findMany();

	const teamExists = allTeams.find((team) => team.nome === nome);

	if (teamExists) {
		return res.status(400).json({ "message": "Team already exists" });
	}

	const team = await prisma.team.create({
		data: {
			nome
		}
	});

	return res.status(201).json(team);
});

teamsRoutes.get("/teamsWithPlayers", async function (req, res) {
	const allTeams = await prisma.team.findMany({
		include: {
			players: true
		}
	});

	return res.status(200).json(allTeams);
});

module.exports = teamsRoutes;
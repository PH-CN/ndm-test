const express = require("express");

const { PrismaClient } = require("@prisma/client");

const teamsRoutes = express.Router();

const prisma = new PrismaClient();

teamsRoutes.post("/register", async function (req, res) {
	const { nome } = req.body;

	const team = await prisma.team.create({
		data: {
			nome
		}
	});

	return res.status(201).json(team);
});

teamsRoutes.get("/teams", async function (req, res) {
	const allTeams = await prisma.team.findMany();

	return res.status(200).json(allTeams);
});

module.exports = teamsRoutes;
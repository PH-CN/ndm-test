const express = require("express");

const { PrismaClient } = require("@prisma/client");

const teamsRoutes = express.Router();

const prisma = new PrismaClient();

teamsRoutes.post("/register", async function (req, res) {
	const { name } = req.body;

	const team = await prisma.team.create({
		data: {
			nome: name,
		}
	});

	return res.status(201).json(team);
});

module.exports = teamsRoutes;
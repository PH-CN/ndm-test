const express = require("express");
const cors = require("cors");
const teamsRoutes = require("./teams.routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(teamsRoutes);

app.get("/health", (req, res) => {
	return res.status(200).json("up");
});

module.exports = app;
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Dummy data
const data = [
	{
		id: uuidv4(),
		name: "Example Item",
		description: "This is an example item",
	},
];

// GET Method
app.get("/data", (req, res) => {
	return res.json(data);
});

// PUT Method
app.put("/data/:id", (req, res) => {
	const { id } = req.params;
	const { name, description } = req.body;

	const foundIndex = data.findIndex((item) => item.id === id);

	if (foundIndex !== -1) {
		data[foundIndex].name = req.body.name || data[foundIndex].name;
		data[foundIndex].description =
			req.body.description || data[foundIndex].description;
		return res.json(data);
	} else {
		const newData = {
			id: uuidv4(),
			name: name,
			description: description || "",
		};
		data.push(newData);
		return res.json(data);
	}
});

// POST Method
app.post("/data", (req, res) => {
	const { name, description } = req.body;

	if (!name) {
		return res.status(400).send("Error: Name cannot be empty");
	}

	const newId = uuidv4();
	const newData = {
		id: newId,
		name,
		description: description || "",
	};

	data.push(newData);
	res.status(201).json(newData);
});

// PATCH Method
app.patch("/data/:id", (req, res) => {
	const { id } = req.params;
	const { description } = req.body;
	const foundIndex = data.findIndex((item) => item.id === id);

	if (foundIndex !== -1) {
		data[foundIndex].description = req.body.description;
		return res.json(data[foundIndex]);
	}
	return res.status(404).send("Data Not Found");
});

// DELETE Method
app.delete("/data/:id", (req, res) => {
	const { id } = req.params;
	const foundIndex = data.findIndex((item) => item.id === id);

	if (foundIndex !== -1) {
		data.splice(foundIndex, 1)[0];
		res.json("Data Deleted");
	} else {
		return res.status(404).send("Data Not Found");
	}
});

// HEAD Method
app.head("data/head", (req, res) => {
	res.sendStatus(200);
});

// OPTIONS Method
app.options("/options", (req, res) => {
	res.setHeader("Allow", "GET, PUT, PATCH, DELETE, HEAD, OPTIONS");
	res.sendStatus(200);
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

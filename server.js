import express from "express";

const app = express();
app.use(express.json());
const tasks = [];

app.post("/tasks", (req, res) => {
  tasks.push(req.body);

  res.status(201).json(req.body);
});

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.listen(3000);

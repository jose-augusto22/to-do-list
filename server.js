import express from "express";

const app = express();
app.use(express.json());
const tasks = [];

app.post("/tasks", (req, res) => {
  tasks.push(req.body);

  res.send("Ok, aqui deu boa");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(3000);

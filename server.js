import express from "express";

const app = express();

app.get("/tasks", (req, res) => {
  res.send("ok");
});

app.listen(3000);

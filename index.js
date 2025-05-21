import express from "express";
import { exec } from "child_process";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/webhook", (req, res) => {
  exec("git pull", (err, stdout, stderr) => {
    if (err) {
      console.error(`Git pull failed: ${stderr}`);
      return res.status(500).send("Git pull failed.");
    }
    console.log(`Git pull output:\n${stdout}`);
    res.status(200).send("Repo updated successfully.");
  });
});

app.get("/", (req, res) => {
  res.send("✅ GhostNode webhook server is running.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

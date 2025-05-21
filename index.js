
import express from "express";
import { exec } from "child_process";

const app = express();
const PORT = process.env.PORT || 5000;

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

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

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (error) => {
  console.error('Server error:', error);
  process.exit(1);
});

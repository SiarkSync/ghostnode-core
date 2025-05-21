import express from "express";
import crypto from "crypto";
import { exec } from "child_process";

const app = express();
const PORT = process.env.PORT || 3000;
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

app.use(express.json());

// Utility: verify GitHub HMAC signature
function verifySignature(req) {
  const sig = req.headers["x-hub-signature-256"];
  if (!sig) return false;
  const hmac = crypto.createHmac("sha256", WEBHOOK_SECRET);
  const digest = "sha256=" + hmac.update(JSON.stringify(req.body)).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(digest));
}

app.post("/webhook", (req, res) => {
  if (!verifySignature(req)) {
    console.warn("⚠️  Invalid webhook signature");
    return res.status(401).send("Invalid signature");
  }

  // Pull the latest code from main
  exec("git pull origin main", (err, stdout, stderr) => {
    if (err) {
      console.error("❌ git pull error:", stderr);
      return res.status(500).send("Git pull failed");
    }
    console.log("✅ git pull output:\n", stdout);

    // Install dependencies if needed
    exec("npm install", (err2, out2, stderr2) => {
      if (err2) {
        console.error("❌ npm install error:", stderr2);
        // Still return success so webhook won't retry
        return res.status(200).send("Pulled, but npm install failed");
      }
      console.log("✅ npm install output:\n", out2);
      res.status(200).send("✅ Repo updated and deps installed");
    });
  });
});

app.get("/", (req, res) => {
  res.send("✅ GhostNode webhook server is running.");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});

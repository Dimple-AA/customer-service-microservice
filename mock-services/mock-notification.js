// mock-services/mock-notification.js
const express = require("express");
const app = express();
app.use(express.json());

// Simulates sending notifications
app.post("/notify", (req, res) => {
  console.log("🔔 [Mock Notification Service] Message received:", req.body);

  res.status(200).json({
    success: true,
    received: req.body,
    timestamp: new Date(),
  });
});

app.listen(3003, () => {
  console.log("✅ Mock Notification Service running on port 3003");
});

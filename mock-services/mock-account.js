// mock-services/mock-account.js
const express = require("express");
const app = express();
app.use(express.json());

// Simulates creating an account when Customer Service calls POST /accounts
app.post("/accounts", (req, res) => {
  console.log("🏦 [Mock Account Service] Account created for:", req.body);

  res.status(201).json({
    account_id: "ACC-" + req.body.customer_id,
    customer_id: req.body.customer_id,
    name: req.body.name,
    balance: 0,
    status: "ACTIVE",
    created_at: new Date(),
  });
});

app.listen(3001, () => {
  console.log("✅ Mock Account Service running on port 3001");
});

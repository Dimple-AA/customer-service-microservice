const axios = require("axios");

const ACCOUNT_SERVICE_URL =
  process.env.ACCOUNT_SERVICE_URL || "http://localhost:3001";
const NOTIFICATION_SERVICE_URL =
  process.env.NOTIFICATION_SERVICE_URL || "http://localhost:3003";

/**
 * Call Account Service
 */
async function createAccountForCustomer(payload) {
  try {
    console.log("➡️ [CustomerService] Creating account for:", payload);
    const response = await axios.post(
      `${ACCOUNT_SERVICE_URL}/accounts`,
      payload
    );
    console.log("✅ Account created:", response.data);
    return response.data;
  } catch (err) {
    console.warn("⚠️ Account Service unavailable:", err.message);
    return null;
  }
}

/**
 * Call Notification Service
 */
async function sendNotification(payload) {
  try {
    console.log("➡️ [CustomerService] Sending notification:", payload);
    const response = await axios.post(
      `${NOTIFICATION_SERVICE_URL}/notify`,
      payload
    );
    console.log("✅ Notification sent:", response.data);
    return response.data;
  } catch (err) {
    console.warn("⚠️ Notification Service unavailable:", err.message);
    return null;
  }
}

module.exports = { createAccountForCustomer, sendNotification };

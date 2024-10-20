
const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");
const path = require("path");
const dotenv = require("dotenv"); // Import dotenv

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = 3000;

// Twilio configuration using environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Use environment variable
const authToken = process.env.TWILIO_AUTH_TOKEN; // Use environment variable
const client = twilio(accountSid, authToken);

// Use this service ID from Twilio's Verify service
const serviceId = process.env.TWILIO_SERVICE_ID; // Use environment variable

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));

// Store user phone number temporarily in memory (in production, use a database)
const userPhoneNumber = process.env.USER_PHONE_NUMBER; // Use environment variable

// Route to serve the login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Handle login form submission and send verification code via Twilio
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Validate the user here (e.g., check the username/password in a database)
  // Assuming validation is successful, send the verification code
  client.verify.v2
    .services(serviceId)
    .verifications.create({ to: userPhoneNumber, channel: "sms" })
    .then((verification) => {
      console.log("Verification code sent:", verification.sid);
      res.redirect("/verify"); // Redirect to verify page
    })
    .catch((err) => {
      console.error("Error sending verification code:", err);
      res.status(500).send("Error sending verification code.");
    });
});

// Route to serve the verify page
app.get("/verify", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "verify.html"));
});

// Handle verification code submission
app.post("/verify-code", (req, res) => {
  const { code } = req.body;

  // Verify the code entered by the user
  client.verify.v2
    .services(serviceId)
    .verificationChecks.create({ to: userPhoneNumber, code: code })
    .then((verification_check) => {
      if (verification_check.status === "approved") {
        // Redirect to the welcome page if the verification is successful
        res.redirect("/welcome");
      } else {
        // If verification fails, redirect back to the verify page
        res.status(401).send("Invalid code. Please try again.");
      }
    })
    .catch((err) => {
      console.error("Error verifying code:", err);
      res.status(500).send("Error verifying code.");
    });
});

// Serve the welcome page
app.get("/welcome", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "welcome.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

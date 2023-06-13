const express = require("express");
const router = express.Router();
//const auth_middleware = require("../middleware/auth")
//const checkAuth = auth_middleware.checkAuth
const axios = require("axios");
const { JWT } = require("google-auth-library");
// const url_metrics_and_goals = process.env.URL_MESSAGES;
// const url_messages = "http://10.0.0.43:8000";
const url_notifications =
  "https://fcm.googleapis.com/v1/projects/fiufit-73a11/messages:send";
const url_tokens = "https://fiufit-usuarios.onrender.com/user/device";

if (url_messages == null) {
  console.log("No URL found for Messages in Environment Variables.");
  process.exit(-1);
}

if (url_tokens == null) {
  console.log("No URL found for Device Tokens in Environment Variables.");
  process.exit(-1);
}

function getAccessToken() {
  const SCOPES = ["https://www.googleapis.com/auth/firebase.messaging"];

  return new Promise(function (resolve, reject) {
    const key = require("../config/fiufit-73a11.json");
    const jwtClient = new JWT(
      key.client_email,
      null,
      key.private_key,
      SCOPES,
      null
    );
    jwtClient.authorize(function (err, tokens) {
      if (err) {
        reject(err);
        return;
      }
      resolve(tokens.access_token);
    });
  });
}

// Send a message
router.post("/send", async function (req, res) {
  const receiverUname = req.body.receiver;
  const senderUname = req.body.sender;
  const newMessage = req.body.message;
  const url = `${url_tokens}/${receiverUname}`;

  let deviceToken;
  try {
    const response = await axios.get(url);
    deviceToken = response.status;
  } catch (error) {
    res.statusCode = error.response.status;
    res.json({ message: error.response.data });
  }

  const authToken = await getAccessToken();

  request_body = {
    message: {
      token: deviceToken,
      notification: {
        body: newMessage,
        title: `Mensaje de ${senderUname}`,
      },
    },
  };
  fetch(url_notifications, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken,
    },
    body: JSON.stringify(request_body),
  });
});

module.exports = { router };

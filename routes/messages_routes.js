const express = require("express");
const router = express.Router();
const axios = require("axios");
const { JWT } = require("google-auth-library");

const { validateApiKey } = require("../middleware/api_key_validation.js");

const url_notifications = process.env.URL_NOTIFICATIONS;
if (url_notifications == null) {
  console.log("No URL found for Messages in Environment Variables.");
  process.exit(-1);
}

const url_tokens = process.env.URL_TOKENS;
if (url_tokens == null) {
  console.log("No URL found for Device Tokens in Environment Variables.");
  process.exit(-1);
}

function getAccessToken() {
  const SCOPES = ["https://www.googleapis.com/auth/firebase.messaging"];

  return new Promise(function (resolve, reject) {
    const key = require("/etc/secrets/fbkey.json");
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
  const apiKey = req.header('Fiu-Fit-Auth');
  const isValidKey = await validateApiKey(apiKey);
  if (!isValidKey) {
    res.statusCode = 401;
    res.json({message: "Invalid API Key"});
    return;
  } else {
    const receiverUname = req.body.receiver;
    const senderUname = req.body.sender;
    const newMessage = req.body.message;
    const url = `${url_tokens}/${receiverUname}`;
  
    let deviceToken;
    try {
      const response = await axios.get(url);
      deviceToken = response.data
    } catch (error) {
      console.log("error:", error);
      res.statusCode = error.response.status;
      res.json({ message: error.response.data });
    }
  
    console.log("deviceToken:", deviceToken);
    const authToken = await getAccessToken();
    console.log("authToken:", authToken);
  
    let request_body = {
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
    })
      .then((response) => {
        res.statusCode = response.status;
        res.json({ message: response.data });
      })
      .catch((error) => {
        res.statusCode = error.response.status;
        res.json({ message: error.response.data });
      });
    }

});

module.exports = { router };

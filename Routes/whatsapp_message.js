const { default: axios } = require('axios');
const express = require('express');

const router = express.Router();

// Handle POST request to send a WhatsApp message
router.post("/whatsapp/:to", async (req, res) => {
  const to = req.params.to;

  try {
    // Send the WhatsApp message
    const response = await sendMessage(to);
    console.log('message sent');
    res.send(`Message sent: ${response}`);
  } catch (error) {
    console.error(error);
    res.json({ error: 'Failed to send message' });
  }
});

// Function to send a WhatsApp message using Facebook Graph API
async function sendMessage(to) {
  const headers = {
    //This has to be changed when going on Live(Production Mode)
    Authorization: 'Bearer EAAU6l2ueut0BANgK0A1Tqrt8U2nfX5EsO5t05v03bq1ERuUqpCvhSH4tZACfBKh65TphZBrgZAYO1cvXjZBH2tr0UKyiN6vTAV4YDrStv2786E4wJywxoEHcDMA2GIZBZBmnZBvRPDoiqb6ZAVGh3m63P3Tc6QkJMJ0y1z1cwjgYNr9ZAh4c8me5NvShRp9q1VP4q0fxSRtx8aCmPhQQXBSSc'
  };

  // Make a POST request to the Facebook Graph API to send the message
  const data = await axios.post(
    // You have to enter your URL which is provided by Meta(Facebook Graph API)
    'https://graph.facebook.com/v16.0/112099341891979/messages',
    {
      "messaging_product": "whatsapp",
      "to": `${to}`,
      "type": "template",
      "template": {
        "name": "hello_world",
        "language": {
          "code": "en_US"
        }
      }
    },
    { headers }
  );

  return data;
}

module.exports = router;

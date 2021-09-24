var express = require("express");
var router = express.Router();
const { Messenger } = require("../../Adapters/Messenger");
class Webhook {
  messenger;
  constructor(keystone) {
    this.messenger = new Messenger(keystone);
  }
  router() {
    /**
     * WEBHOOK_VERIFIED
     */
    router.get("/webhook/messenger", (req, res) => {
      console.log("WEBHOOK_SUBSCRIBE");
      try {
        let mode = req.query["hub.mode"];
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];
        if (mode && token) {
          if (mode === "subscribe" && token === process.env.FB_WEBHOOK_SECRET) {
            console.log("WEBHOOK_VERIFIED");
            res.status(200).send(challenge);
          } else {
            res.sendStatus(403);
          }
        } else {
          res.status(403).send("Missing info!");
        }
      } catch (e) {
        res.send(e.toString());
      }
    });
    /**
     * EVENT RECEIVE
     */
    router.post("/webhook/messenger", (req, res) => {
      let body = req.body;
      if (body.object === "page") {
        const receive = this.messenger.receive;
        body.entry.forEach(async (entry) => {
          receive(entry);
        });
        res.status(200).send("EVENT_RECEIVED");
      } else {
        res.sendStatus(404);
      }
    });
    return router;
  }
}
module.exports = Webhook;

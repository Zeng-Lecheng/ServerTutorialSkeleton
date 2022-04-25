const express = require("express");
const router = express.Router();
let Ship = require("../models/Ship");


router.get("/getShip/secondaryBattery", function (req, res) {
  Ship.find({ secondaryBattery: req.query.secondaryBattery }, function (error, ship) {
    if (error) {
      console.error("Error finding ship", error);
      res.status(500).send(error);
    } else if (! ship) {
      console.error("Error finding ship");
      res.status(404).send(error);
    } else {
      res.send(ship);
    }
  });
});

module.exports = router;

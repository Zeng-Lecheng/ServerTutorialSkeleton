const express = require("express");
const router = express.Router();
let Ship = require("../models/Ship");

router.patch("/updateShip", function (req, res) {
  console.log(req.query);
  if (!req.query.name) {
    console.error("No ship name given.");
    res.status(400).send("No ship name given.");
  } else {
    Ship.findOneAndUpdate({ name: req.query.name }, req.query, { new: true }, function (error, ship) {
      if (error) {
        console.error("Error finding ship", error);
        res.status(500).send(error);
      } else if (!ship) {
        console.error(`Ship ${req.query.name} not found`);
        res.status(404).send(`No ship named ${req.query.name} found.`);
      } else {
        res.send(ship);
      }
    });
  }
});

module.exports = router;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let VehicleSchema = new Schema({
  make: {
    type: String
  },

  model: {
    type: String
  },

  modelYear: {
    type: String
  },

  enginType: {
    type: String,
    match: "gas|hybrid|EV"
  },

  consumption: {
    value: {
      type: Number
    },
    unit: {
      type: String,
      match: "L/100km|km|MPG"
    }
  },

  odometer: {
    value: {
      type: Number
    },
    unit: {
      type: String,
      match: "km|mile"
    }
  },

  displayName: {
    type: String
  },

  VIN: {
    type: String,
    match: "[A-Za-z0-9]{17}"
  }
});

let Vehicle = mongoose.model("Vehicle", VehicleSchema);
module.exports = Vehicle;

//  Add your code here
const { Schema, model, default: mongoose } = require("mongoose");

const celebrityScheme = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String,
  },

  { timestamp: true }
);

module.exports = model("Celebrity", celebrityScheme);

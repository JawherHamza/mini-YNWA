var { Schema, model } = require("mongoose");

const postSchema = new Schema({
  desc: String,
  phoneNumber: String,
  location: String,
  section: {
    type: String,
    enum: ["giver", "reciever"],
  },
});

module.exports = model("Post", postSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var registerSchema = new Schema({
  username: String,
  password: String,
 
});

var Register = mongoose.model('welcomes',registerSchema);

module.exports = Register;
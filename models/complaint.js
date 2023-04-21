const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const complaintSchema = new Schema({
    complaintStatus: {
      type: Boolean,
      default: true,
    },
    complaintDate: {
      type: Date,
      default:Date.now(),
    },
    image: {
      type: String,
      required: true,
    },
    latitudeCo: {
      type: Number,
      required: true,
    },
    longitudeCo: {
      type: Number,
      required: true,
    },
  });
  
module.exports = mongoose.model("Complaint", complaintSchema);
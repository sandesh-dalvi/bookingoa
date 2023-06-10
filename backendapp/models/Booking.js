const mongoose = require("mongoose");

const boookingSchema = new mongoose.Schema({
  place: { type: mongoose.Types.ObjectId, required: true, ref: "Place" },
  user: { type: mongoose.Types.ObjectId, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  price: Number,
  numberOfGuests: Number,
});

const BookingModel = mongoose.model("Booking", boookingSchema);

module.exports = BookingModel;

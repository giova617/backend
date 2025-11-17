import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: "Game" },
  author: String,
  text: String,
  stars: Number
});

export default mongoose.model("Review", reviewSchema);

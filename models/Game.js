import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  platform: String,
  hoursPlayed: Number,
  completed: { type: Boolean, default: false },
  rating: Number,
  coverUrl: String
});

export default mongoose.model("Game", gameSchema);

import Review from "../models/Review.js";

export const getReviews = async (req, res) => {
  const reviews = await Review.find().populate("gameId");
  res.json(reviews);
};

export const addReview = async (req, res) => {
  const review = await Review.create(req.body);
  res.json(review);
};

export const updateReview = async (req, res) => {
  const updated = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteReview = async (req, res) => {
  const deleted = await Review.findByIdAndDelete(req.params.id);
  res.json(deleted);
};

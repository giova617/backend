import express from "express";
import { getReviews, addReview, updateReview, deleteReview } from "../controllers/reviewcontroller.js";
const router = express.Router();

router.get("/", getReviews);
router.post("/", addReview);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);

export default router;

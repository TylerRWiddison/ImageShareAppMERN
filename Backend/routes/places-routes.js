import express from "express";
import { check } from "express-validator";

// Imported controller functions for individual routes
import {
  createPlace,
  deletePlaceById,
  getPlaceById,
  getPlaceByUserId,
  updatePlaceById,
} from "../controllers/places-controller.js";

const router = express.Router();

router.get("/user/:uid", getPlaceByUserId);

router.get("/:pid", getPlaceById);

router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }, 
    check("address").not().isEmpty()),
  ],
  createPlace
);

router.patch(
  "/:pid",
  [
  check("title").not().isEmpty(),
  check("description").isLength({ min: 5 }),
  ],
  updatePlaceById
);

router.delete("/:pid", deletePlaceById);

export default router;

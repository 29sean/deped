import express from "express";

import {
  addDivision,
  getDivisions,
  updateDivision,
  getFeedbackByDivision,
} from "../controller/divisionController.js";

const router = express.Router();

router.post("/add-division", addDivision);
router.put("/updateDivision", updateDivision);
router.get("/get-divisions", getDivisions);
router.get("/get-feedback/:division_id", getFeedbackByDivision);

export default router;

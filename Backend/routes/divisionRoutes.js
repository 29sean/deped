import express from "express";

import {
  addDivision,
  getDivisions,
  updateDivision,
  getFeedbackByDivision,
  getServices,
} from "../controller/divisionController.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/add-division", verifyToken, addDivision);
router.put("/updateDivision", verifyToken, updateDivision);
router.get("/get-divisions", getDivisions);
router.get("/get-services", getServices);
router.get("/get-feedback/:division_id", getFeedbackByDivision);

export default router;

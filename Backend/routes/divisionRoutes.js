import express from "express";

import { addDivision, getDivisions } from "../controller/divisionController.js";

const router = express.Router();

router.post("/add-division", addDivision);
router.get("/get-divisions", getDivisions);

export default router;

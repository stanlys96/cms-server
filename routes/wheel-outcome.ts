import { Router } from "express";

import WheelOutcomeController from "../controllers/WheelOutcomeController";

const router = Router();

router.get("/", WheelOutcomeController.getWheelOutcomes);

export default router;

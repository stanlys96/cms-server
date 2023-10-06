import { Router } from "express";

import WheelOutcomeController from "../controllers/WheelOutcomeController";

const router = Router();

router.get("/", WheelOutcomeController.getWheelOutcomes);
router.post("/addWheelOutcome", WheelOutcomeController.addWheelOutcome);
router.put(
  "/updateWheelOutcome/:id",
  WheelOutcomeController.updateWheelOutcome
);
router.delete(
  "/deleteWheelOutcome/:id",
  WheelOutcomeController.deleteWheelOutcome
);
router.delete(
  "/deleteMultiple",
  WheelOutcomeController.deleteMultipleWheelOutcomes
);

export default router;

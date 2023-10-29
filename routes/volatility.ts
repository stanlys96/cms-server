import { Router } from "express";

import VolatilityController from "../controllers/VolatilityController";

const router = Router();

router.get("/", VolatilityController.getVolatility);
router.post("/addVolatility", VolatilityController.addVolatility);
router.put("/updateVolatility/:id", VolatilityController.updateVolatility);
router.delete("/deleteVolatility/:id", VolatilityController.deleteVolatility);
router.delete("/deleteMultiple", VolatilityController.deleteMultipleVolatility);

export default router;

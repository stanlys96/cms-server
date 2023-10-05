import { Router } from "express";

import ServerAksesController from "../controllers/ServerAksesController";

const router = Router();

router.get("/", ServerAksesController.getServerAkses);
router.post("/addServerAkses", ServerAksesController.addServerAkses);
router.put("/updateServerAkses/:id", ServerAksesController.updateServerAkses);
router.delete(
  "/deleteServerAkses/:id",
  ServerAksesController.deleteServerAkses
);

export default router;

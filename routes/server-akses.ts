import { Router } from "express";

import ServerAksesController from "../controllers/ServerAksesController";

const router = Router();

router.get("/", ServerAksesController.getServerAkses);

export default router;

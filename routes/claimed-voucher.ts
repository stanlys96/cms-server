import { Router } from "express";

import ClaimedVoucherController from "../controllers/ClaimedVoucherController";

const router = Router();

router.get("/", ClaimedVoucherController.getClaimedVouchers);

export default router;

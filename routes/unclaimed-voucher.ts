import { Router } from "express";

import UnclaimedVoucherController from "../controllers/UnclaimedVoucherController";

const router = Router();

router.get("/", UnclaimedVoucherController.getUnclaimedVouchers);

export default router;

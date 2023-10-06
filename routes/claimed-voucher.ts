import { Router } from "express";

import ClaimedVoucherController from "../controllers/ClaimedVoucherController";

const router = Router();

router.get("/", ClaimedVoucherController.getClaimedVouchers);
router.post("/dates", ClaimedVoucherController.getClaimedVouchersBetweenDates);
router.post("/addClaimedVoucher", ClaimedVoucherController.addClaimedVoucher);
router.put(
  "/updateClaimedVoucher/:id",
  ClaimedVoucherController.updateClaimedVoucher
);
router.delete(
  "/deleteClaimedVoucher/:id",
  ClaimedVoucherController.deleteClaimedVoucher
);

export default router;

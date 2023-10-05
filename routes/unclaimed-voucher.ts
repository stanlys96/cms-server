import { Router } from "express";

import UnclaimedVoucherController from "../controllers/UnclaimedVoucherController";

const router = Router();

router.get("/", UnclaimedVoucherController.getUnclaimedVouchers);
router.post(
  "/addUnclaimedVoucher",
  UnclaimedVoucherController.addUnclaimedVoucher
);
router.put(
  "/updateUnclaimedVoucher/:id",
  UnclaimedVoucherController.updateUnclaimedVoucher
);
router.delete(
  "/deleteUnclaimedVoucher/:id",
  UnclaimedVoucherController.deleteUnclaimedVoucher
);

export default router;

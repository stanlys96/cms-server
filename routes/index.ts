import express from "express";
import articleRoutes from "./article";
import categoryRoutes from "./category";
import claimedVoucherRoutes from "./claimed-voucher";

const router = express.Router();

router.use("/articles", articleRoutes);
router.use("/categories", categoryRoutes);
router.use("/claimed-vouchers", claimedVoucherRoutes);

export default router;

import express from "express";
import articleRoutes from "./article";
import categoryRoutes from "./category";
import claimedVoucherRoutes from "./claimed-voucher";
import serverAksesRoutes from "./server-akses";
import unclaimedVoucherRoutes from "./unclaimed-voucher";
import wheelOutcomeRoutes from "./wheel-outcome";
import userRoutes from "./user";

const router = express.Router();

router.use("/articles", articleRoutes);
router.use("/categories", categoryRoutes);
router.use("/claimed-vouchers", claimedVoucherRoutes);
router.use("/server-akses", serverAksesRoutes);
router.use("/unclaimed-vouchers", unclaimedVoucherRoutes);
router.use("/wheel-outcomes", wheelOutcomeRoutes);
router.use("/users", userRoutes);

export default router;

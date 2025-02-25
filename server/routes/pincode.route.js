import { Router } from "express";
import PincodeController from "../controller/pincode.controller.js";

const router = Router();

router.route('/addpincode').post(PincodeController.addpincode);
router.route("/pincode").get(PincodeController.findPincode);

export default router;
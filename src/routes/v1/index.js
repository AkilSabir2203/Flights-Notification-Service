import express from "express";
import { InfoController, EmailController } from "../../controllers/index.js";

const router = express.Router();

router.get("/info", InfoController.info);
router.post("/tickets", EmailController.create);

export default router;

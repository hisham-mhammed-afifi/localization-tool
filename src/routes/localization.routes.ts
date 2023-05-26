import express, { Router } from "express";
import {
  getLocalization,
  addNewKey,
} from "../controllers/localization.controller";

const router: Router = express.Router();

router.get("/:filename", getLocalization);
router.post("/", addNewKey);

export default router;

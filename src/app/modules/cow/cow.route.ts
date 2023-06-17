import express from "express";
import { CowController } from "./cow.controller";
import validateRequest from "../../middlewares/validateRequest";
import { CowValidation } from "./cow.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(CowValidation.createCowZodSchema),
  CowController.createCow
);
router.get("/", CowController.getAllCows);

export const CowRoutes = router;

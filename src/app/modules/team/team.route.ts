import express from "express";
import { TeamController } from "./team.controller";

const router = express.Router();

router.post("/", TeamController.createTeam);

router.get("/", TeamController.getAllTeam);

export const TeamRoutes = router;

import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { TeamService } from "./team.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createTeam = catchAsync(async (req: Request, res: Response) => {
  const result = await TeamService.createTeam(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Team successfully created.",
    data: result,
  });
});
const getAllTeam = catchAsync(async (req: Request, res: Response) => {
  const result = await TeamService.getAllTeam();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Team successfully fetched.",
    data: result,
  });
});

export const TeamController = {
  createTeam,
  getAllTeam,
};

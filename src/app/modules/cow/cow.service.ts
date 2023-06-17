import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { User } from "../user/user.model";
import { ICow } from "./cow.interface";
import { Cow } from "./cow.model";

const createCowService = async (cowData: ICow): Promise<ICow> => {
  const isExist = await User.findById(cowData.seller);
  if (!isExist) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Please give me seller id as seller."
    );
  }
  const result = await Cow.create(cowData);

  return result;
};

const getAllCowsService = async () => {};

export const CowService = {
  createCowService,
  getAllCowsService,
};

import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { IUser, IUserFilters } from "./user.interface";
import { User } from "./user.model";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import { IPaginationOptions } from "../../../interfaces/pagination.interface";
import { SortOrder } from "mongoose";
import { IGenericResponse } from "../../../interfaces/common";
import { userSearchableFields } from "./user.constant";

const createUser = async (user: IUser): Promise<IUser> => {
  const result = await User.create(user);

  return result;
};
const getAllUserService = async (
  filters: IUserFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IUser[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);
  const { searchTerm, ...filtersData } = filters;
  console.log(filtersData);

  const andConditions: any[] = [];

  if (searchTerm) {
    andConditions.push({
      $or: userSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length > 0) {
    andConditions.push({
      $and: Object.keys(filtersData).map((key) => ({
        [key]: (filtersData as any)[key],
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const total = await User.countDocuments(whereConditions);
  const result = await User.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleUserService = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);

  return result;
};

const updateUserService = async (
  id: string,
  updatedData: Partial<IUser>
): Promise<IUser | null> => {
  const userExist = await User.findById(id);

  if (!userExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exist.");
  }

  const result = await User.findOneAndUpdate({ _id: id }, updatedData, {
    new: true,
  });

  return result;
};

const deleteUserService = async (id: string): Promise<IUser | null> => {
  const userExist = await User.findById(id);

  if (!userExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exist.");
  }

  const result = await User.findByIdAndDelete(id);

  return result;
};

export const UserService = {
  createUser,
  getAllUserService,
  getSingleUserService,
  updateUserService,
  deleteUserService,
};

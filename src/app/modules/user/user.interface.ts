import { Model } from "mongoose";

export type IUser = {};

export type UserModel = Model<IUser, Record<string, unknown>>;

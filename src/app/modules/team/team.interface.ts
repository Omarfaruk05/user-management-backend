import { Document, Model, Schema } from "mongoose";
import { IUser } from "../user/user.interface";

export interface ITeam extends Document {
  users: IUser[];
}
export type TeamModel = Model<ITeam, Record<string, unknown>>;

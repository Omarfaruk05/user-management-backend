import { ITeam } from "./team.interface";
import { Team } from "./team.model";

const createTeam = async (data: ITeam): Promise<ITeam> => {
  const result = await Team.create(data);

  return result;
};
const getAllTeam = async (): Promise<ITeam[]> => {
  const result = await Team.find().populate("users");

  return result;
};

export const TeamService = {
  createTeam,
  getAllTeam,
};

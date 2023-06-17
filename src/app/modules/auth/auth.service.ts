import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";

const createUserService = async (payload: IUser): Promise<IUser> => {
  const result = await User.create(payload);
  return result;
};

export const AuthService = {
  createUserService,
};

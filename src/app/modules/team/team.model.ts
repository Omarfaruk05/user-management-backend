import { Schema, model } from "mongoose";
import { ITeam, TeamModel } from "./team.interface";

const mongoose = require("mongoose");

const teamSchema = new Schema<ITeam, TeamModel>({
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export const Team = model<ITeam, TeamModel>("Team", teamSchema);

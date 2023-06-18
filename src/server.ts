import mongoose from "mongoose";
import { Server } from "http";
import app from "./app";
import config from "./config";

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Database is connected.");
    app.listen(config.port, () => {
      console.log(`Application is listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("Fail to connect database", error);
  }
}

bootstrap();

import mongoose from "mongoose";
import config from "../config/default";
import log from "../logger";

const connect = () => {
  const dbUri = config.dbURL;

  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("Database error", error);
    });
};

export default connect;

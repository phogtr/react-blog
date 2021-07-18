import mongoose from "mongoose";
import log from "../logger";

const connect = async () => {
  const dbUrl = String(process.env.DB_URL);

  return mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("Database error", error);
    });
};

export default connect;

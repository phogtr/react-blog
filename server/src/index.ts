import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connect from "./db/connect";
import log from "./logger";
import { deserializeUser } from "./middleware/";
import { adminRoute, postRoute, userRoute } from "./routes/";

const app = express();
dotenv.config();

app.use(cors());

app.use(deserializeUser);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  log.info(`Server started on ${PORT}`); //  console.log is blocking IO, log from pino is not

  connect();
  postRoute(app);
  userRoute(app);
  adminRoute(app);
});

import express from "express";
import log from "./logger";
import connect from "./db/connect";
import { postRoute, userRoute } from "./routes/";
import deserializeUser from "./middleware/deserializeUser";
import cors from "cors";

const app = express();

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
});

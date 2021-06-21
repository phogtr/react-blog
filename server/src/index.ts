import express from "express";
import log from "./logger";
import connect from "./db/connect";
import postRoutes from "./routes/posts.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  log.info(`Server started on ${PORT}`); //  console.log is blocking IO, log from pino is not

  connect();
  postRoutes(app);
});

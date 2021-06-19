import express from "express";
import logger from "pino";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


const log = logger({
  prettyPrint: true,
  base: {
    pid: false,
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  log.info(`Server started on ${PORT}`);  //  console.log is blocking IO, log from pino is not
})
import logger from "pino";

const log = logger({
  prettyPrint: true,
  base: {
    pid: false,
  },
});

export default log;

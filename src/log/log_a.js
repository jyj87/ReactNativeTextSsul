import { logger, consoleTransport } from "react-native-logs";

const config = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  severity: 'debug',
  transport: consoleTransport,
  transportOptions: {
    colors: {
      info: "blueBright",
      debug:"green",
      warn: "yellowBright",
      error: "redBright",
    },
    format: (msg, level) => {
      const timestamp = new Date().toLocaleString();
      return `[${timestamp}] [${level}] ${msg}`;
    },
  },
};

export const log = logger.createLogger(config);


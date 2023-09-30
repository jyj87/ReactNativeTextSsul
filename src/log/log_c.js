import {logger, consoleTransport} from 'react-native-logs';

const defaultConfig = {
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
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
  async: true,
  dateFormat: 'time',
  printLevel: true,
  printDate: true,
  enabled: true,
};

export const log = logger.createLogger(defaultConfig);

export const logInfoReducer = (
  sliceName,
  methodName,
  printTarget,
  targetData,
) => {
  const message =
    `${sliceName}` +
    ' : ' +
    `${methodName}` +
    '\n============================' +
    `${printTarget}` +
    '============================\n';

  log.info(message, targetData);
};

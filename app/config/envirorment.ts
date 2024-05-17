import { Logger } from "./logger";

const isTest = process.env.NODE_ENV === "test";
const isDev = process.env.NODE_ENV === "dev";
const isPrd = !isDev;

export const env = {
  isDev,
  isPrd,
  isTest,
};

Logger.log(`[ENV] load envirorment:`, env);

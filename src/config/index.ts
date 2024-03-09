import { config } from "dotenv";
import { createLocalConfig } from "./envs/local";
export const appConfig = getConfig();

function getConfig() {
  config();
  switch (process.env.APP_ENV) {
    // TODO add other evns like prod and staging
    case "local":
      return createLocalConfig();
    default:
      throw new Error(`Invalid APP_ENV "${process.env.APP_ENV}"`);
  }
}

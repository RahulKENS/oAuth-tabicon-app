import dotenv from "dotenv";
dotenv.config();

export const config = {
  apikey: process.env.API_KEY,
  apisecretkey: process.env.API_SECRET,
  mongodburl: process.env.MONGO_URL,
  redirecturl: process.env.REDIRECT_URI,
  appurl: process.env.APP_URL,
  apiversion: process.env.API_VERSION,
  port:process.env.PORT,
  scopes:process.env.APP_SCOPE,
};

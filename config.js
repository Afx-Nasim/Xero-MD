const { Sequelize } = require("sequelize");
const DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
const toBool = (x) => x === "true";

module.exports = {
  LOGS: toBool(process.env.LOGS) || true, //false for if you don't want show the logs
  HANDLERS:process.env.HANDLER === "false" || process.env.HANDLERS || '^',
  BRANCH: "master",
  OWNER_NUMBER: ["919961857267@s.whatsapp.net", "918891871875@s.whatsapp.net", "918943027806@s.whatsapp.net"],
  STICKER_DATA: process.env.STICKER_DATA || "FINU-BOT;Afx-Nazim",
  SUDO: process.env.SUDO || "919961857267,918891871875,918943027806",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  OWNER_NAME: process.env.OWNER_NAME || "Afx-Nasim",
  MENU_URL: process.env.MENU_URL || "https://www.instagram.com/nazim.x10",
  IMAGE_URL: process.env.IMAGE_URL ||"https://i.imgur.com/RLTpQS8.jpeg",
  BOT_NAME: process.env.BOT_NAME || "FINU-BOT",
  THUMB_NAIL: process.env.THUMB_NAIL || "https://i.imgur.com/Uga7UB5.jpeg",
  ALIVE_MSG: process.env.ALIVE_MSG || "*I AM ALIVE NOW BUDDY*",
  ALIVE_LOGO: process.env. ALIVE_LOGO || "https://i.imgur.com/jwG0K4A.jpeg",
  WORK_TYPE: process.env.WORK_TYPE || "public",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};

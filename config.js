//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349164718113";
global.owner = process.env.OWNER_NUMBER || "2347086220601";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZuYThwUlpwWUpGczcyL2pDYVRmc05KdkFBRTVBRlhXbEJJcDFLRlFGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL09hd0I2MHZnendCaHBEcjJKR3VVT2pCd1JEVzIxWTZmNkQ0cEJTN0d3dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDUDlGUG11NGFlWGZKVzNTMm85TnFxL1h6T29yZnJBQWlUL0JPcW1xVW1rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQNmlwYmZtNjR0N1hUMlNreE9kRktmK1hnZTE5RkVxWFRKaGZIQUFWdTBzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRER3B1K2ltdkdwSUV5WWZxVGtESVJYdWZmZmkyaHJPVE5ZMS95MmVPa0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlvZ2lHR2pMamlCeWlNNG5ndXh0OGJEQUxlak9KUEhvM3lVSHZoU1hwZzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0JLYWgvTXcrSlBpQzNsR29VcTNmdHBvdjhncVJlS0lYNG1sMmJRTVIyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVktjZFdrMUh6YWxGcTFNWk8zRkZzT25mdkdwcHBuakxCRVl6NkdjVlMzZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVGa3kvZEc4TmFJRm1JTkpIYUx4QjFXNFlxeEJIUlQrd3QwVzNLZmNRSXBLK1dVY0NHQzJ0L0ZIQjJpcStuZU9kNzZ3emZERXRvazdKSDdKWWt5RWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjEsImFkdlNlY3JldEtleSI6IkhqU0ovNjExQkhDSlA5WjhFMXk1cUtjTU41d3lML0d1NHhEVi9Fdm9Lbkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA4NjIyMDYwMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzNDk2QTI5QzdDMkQwNjRBODYxQzdCQ0FDMkMwNTgxNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMyNjA1MTE1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJObGhxanFtd1JhS0Y3SjZGdmkxbFN3IiwicGhvbmVJZCI6ImQyMDVkZWM0LTJiNzQtNGI0Zi1iOGM4LTYwNzI1NzMxYWI0NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzWkpqQXFmUTJ3dU5PSnRGM1VjdzlDMTdiKzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDIrU2lnMjhVTWNvRjN5NGlkY0czV0tqUFlrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVNVlZURUdEIiwibWUiOnsiaWQiOiIyMzQ3MDg2MjIwNjAxOjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01ubHh6SVFyT21WdWdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZBSTBFRlVGSm52LzJRMjUxSlRCbDI5Yi83RldVZFhKOTVVaW1LYjlzUkU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpKQkZYRVFOWGxRVFJwSmFydVBqcnRaejdESy9NN2l3TEdXYjJPQmpuOU1UMjZJN3JkaHV1WVppZUVqVi9mZm1PWUs2SnBJSHA0bEpER3JobFBMWkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3UzROZlZnUFY2dWlmdUpoUmdYZjN6Y2R0NHViLzVoR0crcXdJNXI3UncwRkxjSnVSeGc0czBMMFpSR0ZQaWRURXpJbHlGc1hhLzNXR1JxZEhtM01qQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwODYyMjA2MDE6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSUUNOQkJWQlNaNy85a051ZFNVd1pkdlcvK3hWbEhWeWZlVklwaW0vYkVSIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMyNjA1MTEzfQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`☯︎TI LE✌︎💨",
  author: process.env.PACK_AUTHER || "☯︎TI LE✌︎💨",
  packname: process.env.PACK_NAME || "☯︎TI LE✌︎💨",
  botname: process.env.BOT_NAME || "☯︎TI LE✌︎💨",
  ownername: process.env.OWNER_NAME || "☯︎TI LE✌︎💨",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "☯︎TI LE✌︎💨").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

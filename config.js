const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254743443368";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || " SUHAIL_10_32_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzOCxcbiAgICAgICAgMCxcbiAgICAgICAgNTksXG4gICAgICAgIDExMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgOTUsXG4gICAgICAgIDc1LFxuICAgICAgICA3OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc5LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODksXG4gICAgICAgIDc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMTg2LFxuICAgICAgICA0LFxuICAgICAgICAzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTksXG4gICAgICAgIDQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDM1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDgyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2OSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjksXG4gICAgICAgIDYzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDU3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDY2LFxuICAgICAgICAzNixcbiAgICAgICAgNjksXG4gICAgICAgIDM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDcyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBhb3BlREhpUlVzcjR3WUcxMmFVR245b2ZXa1FvWnZ3MVh6K0s2L1liVmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzQzNDQzMzY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0QzhBREQ2MDE5NTNBQzRFMjkxMDMyN0VGOTkxQzE5N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzMxMzU1NThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NDM0NDMzNjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZBRUFFNjY3OUMyOTc0QzZFRkY1REMxQjNFQTE1NkFEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzEzNTU1OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVNGpNVXE0UVRUR0oxMXVkdGpjT3pnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQyNzI2YTQ1LTBjMDYtNDY1NC05OTNiLTExM2ZmZTMyYzRhYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjYsXG4gICAgICA0LFxuICAgICAgMTYzLFxuICAgICAgMTQ3LFxuICAgICAgMjA1LFxuICAgICAgNjIsXG4gICAgICAxMjcsXG4gICAgICA2OSxcbiAgICAgIDEzNixcbiAgICAgIDIwMyxcbiAgICAgIDM4LFxuICAgICAgMjMwLFxuICAgICAgMjIyLFxuICAgICAgMjIxLFxuICAgICAgMTU2LFxuICAgICAgMTIwLFxuICAgICAgMjM3LFxuICAgICAgNzksXG4gICAgICA5NyxcbiAgICAgIDIzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAyMjMsXG4gICAgICA2OCxcbiAgICAgIDE3MSxcbiAgICAgIDIyOCxcbiAgICAgIDEzNyxcbiAgICAgIDE1OSxcbiAgICAgIDExMCxcbiAgICAgIDYzLFxuICAgICAgOTMsXG4gICAgICAxOTUsXG4gICAgICAzMSxcbiAgICAgIDE5NSxcbiAgICAgIDEyNixcbiAgICAgIDExNCxcbiAgICAgIDU5LFxuICAgICAgMTcxLFxuICAgICAgMTk5LFxuICAgICAgMTE3LFxuICAgICAgMTczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpYTEcySFQzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDM0NDMzNjg6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwOTk4NTM4MDMyMzU1Mzo0MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJSYXp6eVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09LSXRvQUNFTCtadHJvR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZGR0Z1V4Ulp6R0xKSGxHeGU3andWT25odGcwZlN2MmQ3ZWF5RU5veXh3az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6ZzlSK0wvTTYwdmdVQ0xFeXc1QjFpRzBFbkc0S25RV05OSkZoVkpGMHBDaEVRL3NrWGRveUFteG54OTRtR0IvSWdqWmdzNEorb0s5SU1raDErcHdDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDZTdmd3l6T0srODBwWUNQSnV1S0hrZEh1VldJOCs5SnpBUllpbW11QUhIS1QvRHNtVmo0LzZNNTYwQVpoUDF5NVNBZ0lFWDdKMm9wc3hzYVNzR3pCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDM0NDMzNjg6NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMxMzU1NTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQVi9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBWLy5qc29uIjoge30KfQ==" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

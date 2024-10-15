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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_49_10_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgODksXG4gICAgICAgIDgzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg4LFxuICAgICAgICA0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDg1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTksXG4gICAgICAgIDY4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICA0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY2LFxuICAgICAgICA2MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDc1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDYsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg4LFxuICAgICAgICA3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDExMixcbiAgICAgICAgNzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM2LFxuICAgICAgICA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0LFxuICAgICAgICA1MCxcbiAgICAgICAgODcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhXVTB5aWpOdjNrREhhN1duM3haTldONVRDMFJta25CcnNHL2o4QjlFZWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNXTUR5dWVYUmZpUXNyQUNKenk4dGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWQ3OTg5MjgtNDM2NC00M2ExLWFmZmYtMjkwM2I1NDMyZmE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNyxcbiAgICAgIDIwMixcbiAgICAgIDIyMSxcbiAgICAgIDIwNCxcbiAgICAgIDEyOCxcbiAgICAgIDIxLFxuICAgICAgNDIsXG4gICAgICAyMzYsXG4gICAgICAyMyxcbiAgICAgIDEwOCxcbiAgICAgIDkyLFxuICAgICAgMjEwLFxuICAgICAgMjIsXG4gICAgICAxMjQsXG4gICAgICAyMjAsXG4gICAgICA5NSxcbiAgICAgIDE2MyxcbiAgICAgIDcyLFxuICAgICAgMzcsXG4gICAgICAxNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICAyNyxcbiAgICAgIDMwLFxuICAgICAgNDcsXG4gICAgICAxMjUsXG4gICAgICAxNDksXG4gICAgICAyNDQsXG4gICAgICAyNTMsXG4gICAgICAxMzIsXG4gICAgICAyMTQsXG4gICAgICA0LFxuICAgICAgMTEsXG4gICAgICA4OCxcbiAgICAgIDE3NSxcbiAgICAgIDM3LFxuICAgICAgMjM5LFxuICAgICAgMTYwLFxuICAgICAgMTIyLFxuICAgICAgMTksXG4gICAgICA5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOOURTN0w4QlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQzNDQzMzY4OjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDk5ODUzODAzMjM1NTM6MzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjJJdG9BQ0VObUJ1cmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkZHRnVXhSWnpHTEpIbEd4ZTdqd1ZPbmh0ZzBmU3YyZDdlYXlFTm95eHdrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktlajBWMm5lRUVvRmdKcXpVVlY0VDhqb1pEdmtYbGlScVJsL3BDSHVhQWM4WGFESDJvWHJSa1B0aG5Ca2RiNVlYaGt4ZDBma0QxR2IxdnllMjF0akNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi95MTY1UVpYak9jUk5uYnBqL3VXUHJzSTJIWFpPaGRlekcycFFRcEpib3dsdTNtbElmM01FMWI0MTNyQXA3LzBrVmV0R1JuS3R1WWhoYlJHVnB0QkFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0MzQ0MzM2ODozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTAwMzc0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5nRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTmdFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSkUvMGN0bE5UUXBtMEYxN21VWm5DdDI0MVNma29acEQ2d0lSSW1JN1JaND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1Mzc3NTY3NjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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

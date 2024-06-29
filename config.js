const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347035176274";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_43_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDYxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTExLFxuICAgICAgICA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAzNixcbiAgICAgICAgMTAxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDkyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzIsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMixcbiAgICAgICAgMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk2LFxuICAgICAgICA2MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg1LFxuICAgICAgICA2NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDcyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDcyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIsXG4gICAgICAgIDgxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLMExqSnBZd1NxVm13QzdnSExKQ1Z3UnZUSjlTb0lpMFV0RzhBNjZXRUd3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMzUxNzYyNzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFCRjQwNjY1OTc2QkZCRDYyMTEyRkZENjZFODIxQjQ3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTY4NjYxOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSdmUtVTJMVFJsTzVCdWQ2bVp5R25nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg2NDZmNzgzLTgzZGEtNGZlZC1hZmQ4LTk2OWMzY2NhZTlmZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDQsXG4gICAgICA4NixcbiAgICAgIDI3LFxuICAgICAgOTcsXG4gICAgICAzOCxcbiAgICAgIDM5LFxuICAgICAgNCxcbiAgICAgIDE3MixcbiAgICAgIDIwNSxcbiAgICAgIDEyOCxcbiAgICAgIDE5NSxcbiAgICAgIDEyNixcbiAgICAgIDExNCxcbiAgICAgIDc1LFxuICAgICAgMjAxLFxuICAgICAgMTgwLFxuICAgICAgMTg5LFxuICAgICAgMTksXG4gICAgICAxODEsXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc4LFxuICAgICAgMTk1LFxuICAgICAgMTAyLFxuICAgICAgMjcsXG4gICAgICAxMzcsXG4gICAgICAxMTYsXG4gICAgICAyMjYsXG4gICAgICAxNTQsXG4gICAgICA4NixcbiAgICAgIDE0NyxcbiAgICAgIDI0LFxuICAgICAgMTYyLFxuICAgICAgMTkwLFxuICAgICAgMjA1LFxuICAgICAgNTgsXG4gICAgICA4MyxcbiAgICAgIDE1MyxcbiAgICAgIDEwMixcbiAgICAgIDIxMyxcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktHOUxNM1ZSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDM1MTc2Mjc0OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyNTc3Mzk1NjUxMzkzOTo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ082MGkva0RFTkNyZ2JRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibzhFS1M4TmIyNjBqRU1TMkl2NVowdHhwdTc0UW1EaTUvb0dDbktseVlrQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2eTF2SzJUUFdsbGlHMTd4VXFmU2xCSEZmWjY4NTB3T3l6SUtEYUhwcWJ5cE9DVGxrRXZCY0dCVi9kNWhKZEMzWU5xajJLdk1zejRqbjF3U25GRkdCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0eFVGdFZzOUhGMGlqVlhOWmxBeEFrZmJ1Qk9RaGdGZGxvZk5HOWx4cyt3V0NQSUpHQ2FjTkVTZGJhM1Y3YS81ajJlMnVhUkxvNjhWTFVTM1dzTTREQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDM1MTc2Mjc0OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5Njg2NjExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGJlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMYmUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1UUpscWdMS0NpVmZibkJ0NTJCZlp6VC96R0lsZ2tiNnovSzFFUmdaUDVRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNTkyNDg3NDksXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTI5OTI5MDQ2MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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

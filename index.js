// ==============================
const discord  = require('discord.js-self'); // better that discord.js-selfbot
const client = new discord.Client();

const token = "" // <======= put your token here
const owner = ""  // extra 
const ownername = "ज्ञ  𝐌𝐚𝐧𝐢⸸𝐌𝐁𝐍 ᵍᵒʳᵍⁱ#0169" // extra 
const status = [
  "dnd", 
  "idle", 
  "online"
]

var finalstatus = status[Math.floor(Math.random()*status.length)];

/* hadi.az was here ;D */
// ===============================
client.on('ready', () => {  
    console.log(`Logged in as ${client.user.tag}!`);
  setInterval(() => {
		console.log(`Status Changed`);
    	client.user.setPresence({
        	status: finalstatus,
        	}
      )
  }, 1000);

    });

client.login(token);

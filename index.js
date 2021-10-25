// ==============================
const discord  = require('discord.js-selfbot');
const client = new discord.Client();
const token = "" // <======= put your token here
const owner = "" 
const ownername = "ज्ञ  𝐌𝐚𝐧𝐢⸸𝐌𝐁𝐍 ᵍᵒʳᵍⁱ#0169" 

// ===============================
client.on('ready', () => {  
    console.log(`Logged in as ${client.user.tag}!`);
	const stat = ["dnd", "dnd", "idle", "idle", "online", "online"];
  setInterval(() => {
    const random = Math.floor(Math.random() * (stat.length - 1) + 1);
	  const stats = stat[random];
	console.log(`Status Changed`);
    client.user.setPresence({
        status: stats,
        }
      )
  }, 1000);

    });

client.login(token);

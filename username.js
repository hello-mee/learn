
const Discord = require('discord.js');
const Enmap = require(`enmap`);
const farm = new Enmap();
const client1 = new Discord.Client();




client1.login(process.env.S1);







client1.on('message', msg => {
    let ownerid = '649263501788971059';
    if(msg.author.id === ownerid){
        if(msg.content.startsWith('c')){

            if(msg.isMentioned(client1.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
				msg.channel.send(`#credits <@649263501788971059> ${args[2]}`)
				msg.channel.send(`#credits <@649263501788971059> ${args[2]}`)
			}
		}
	}
});



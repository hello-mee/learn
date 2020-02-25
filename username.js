
const Discord = require('discord.js');
const Enmap = require(`enmap`);
const farm = new Enmap();
const client1 = new Discord.Client();




client1.login(process.env.S166);







client1.on('message', msg => {
    let ownerid = '649263501788971059';
    if(msg.author.id === ownerid){
        if(msg.content.startsWith('c')){

            if(msg.isMentioned(client1.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
				msg.channel.send(`#credits <@649263501788971059> ${args[2]}`)
				msg.channel.send(`#credits <@649263501788971059> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
			}
		}
	}
});



const Discord = require("discord.js");
const request = require("request");
//Библеотека discord.js
const { inspect } = require("util");
//фор евал
const config = require('./config.json');
const vm = require("vm");
const fs = require("fs");
const codeContext =  {};
const cheerio = require('cheerio');
const snekfetch = require('snekfetch');
const querystring = require('querystring');
vm.createContext(codeContext);
//Клиент бота
const client = new Discord.Client();
//префикс
const prefix = "x!";
const creators = ['361951318929309707'];
//массив эмодзи
const emojis = {nya:'435849475865575424'}
let actFUN = 0;  // actFUN = actFUN + 1;actALL = actALL +1;
let actMOD = 0;  // actMOD = actMOD + 1;actALL = actALL +1;
let actRCT = 0;  // actRCT = actRCT + 1;actALL = actALL +1;
let actNSFW = 0; // actNSFW = actNSFW + 1;actALL = actALL +1;
let actOWN = 0; //  actOWN = actOWN + 1;actALL = actALL +1;
let actIMG = 0; //  actIMG = actIMG + 1;actALL = actALL +1;
let actALL = 0; //  actALL = actALL +1;actALL = actALL +1;
let gameCount = 0;
//массив цветов
const colors = ['ff2828','ff3d28','ff4b28','ff5a28','ff6828','ff7628','ff8c28','ffa128','ffac28','ffb728','ffc228','ffd028','ffd728','ffe228','fff028','fffb28','edff28','deff28','d0ff28','c2ff28','b3ff28','9aff28','8cff28','7dff28','6fff28','5aff28','3dff28','28ff2b','28ff41','28ff56','28ff6c','28ff81','28ff93','28ffa9','28ffba','28ffc9','28ffde','28fff4','28ffff','28f0ff','28deff','28deff','28d3ff','28c5ff','28baff','28b0ff','28a5ff','289eff','2893ff','2885ff','2876ff','2864ff','2856ff','284bff','2841ff','2836ff','2828ff','3228ff','4428ff','5328ff','6828ff','7628ff','7e28ff','8828ff','9328ff','a128ff','b028ff','be28ff','c928ff','d328ff','db28ff','e528ff','f028ff','ff28ff','ff28f7','ff28e5','ff28de','ff28d0','ff28c9','ff28ba','ff28b3','ff28a5','ff289a','ff288c','ff2881','ff287a','ff2873','ff2868','ff2861','ff2856','ff284f','ff2848','ff2844','ff282b'];
//Выполняет действие когда бот запустился.
client.on("ready", () => {
    //Отпраляет сообщение в логи что бот запущен (+ количество серверов).${i}

    console.log(`Успешный старт. ${client.guilds.size} серверов`);
    //Ставит боту статус.
    client.user.setActivity(`x!help | ${client.guilds.size} servers`).catch(console.error);
    //Функция необходимая для запуска радуги.
    servers.forEach(function (item1, number1) {
    if (!client.guilds.get(item1[0]) || !client.guilds.get(item1[0]).roles.get(item1[1]) || !client.guilds.get(item1[0]).roles.get(item1[1]).editable) servers.splice(number1, 1);
    });
    color();
});


const servers = config.servers;

async function color () {
    await servers.forEach(async function (item1, number1) {
        if (client.guilds.get(item1[0]) && client.guilds.get(item1[0]).roles.get(item1[1]).editable)
        await colors.forEach(async function (item, number) {
            //Ищет заданую гильдию после заданую роль, в заданой скорости вращает цвета по кругу.
            await setTimeout(async function () {client.guilds.get(item1[0]).roles.get(item1[1]).setColor(item).catch(console.error);if(number === colors.length-1 && number1 === servers.length-1) setTimeout(function () {color().catch(console.error)}, 500)}, number*500);
        });
    });
}

client.on("guildCreate", guild => {
  const logsServerJoin = client.channels.get('454637063527071756');
  const embed = new Discord.RichEmbed()
  .setTitle(guild.name)
  .setDescription("Новый сервер.")
  .setColor("00ff00")
  .addField("Количество людей:", guild.memberCount)
  .addField("Количество ролей:", guild.roles.size)
  .addField("ID:", guild.id)
   logsServerJoin.send({embed});
    logsServerJoin.send("``` ```");
});    
client.on("guildDelete", guild => {
  const logsServerLeave = client.channels.get('454637063527071756');
  const embed = new Discord.RichEmbed()
  .setTitle(guild.name)
  .setDescription("Ничто не вечно, я был удален с сервера")
  .setColor("00ff00")
  .addField("Количество людей:", guild.memberCount)
  .addField("Количество ролей:", guild.roles.size)
  .addField("ID:", guild.id)
 	
  logsServerLeave.send({embed});
  logsServerLeave.send("``` ```");
});

client.on('message', async (message) => {
//При заданом сообщение выполняет действие.
    if (message.content.startsWith("бот пиши")) {
        //Отвечает за то чтобы бот начал писать в вызваном чате.
        message.channel.startTyping();
    }
    if (message.channel.type === 'dm') {
        if ([`${client.user.id}`].includes(message.author.id)) return;
        if (['361951318929309707'].includes(message.author.id)) return client.channels.get('454011475493912586').send('Сообщение от '+message.author+': ```'+message.content.replace(/`/g, "`" + String.fromCharCode(8203))+'```');
        client.channels.get('449845125816909834').send('Сообщение от '+message.author.username+': ```'+message.content.replace(/`/g, "`" + String.fromCharCode(8203))+'```')
    }
	

//При заданом сообщение выполняет действие.
    if (message.content.startsWith("бот не пиши")) {
        //Отвечает за то чтобы бот перестал писать в вызваном чате.
        message.channel.stopTyping();
    }
    

   if (message.content.startsWith("слава книге")) {
        //Заканчивает процесс.
        message.pin();
    }
    if (message.content.startsWith("во слава книге")) {
        //Заканчивает процесс.
        message.pin();
    }
    if (message.content.startsWith("во славу книге")) {
        //Заканчивает процесс.
        message.pin();
    }
          
    function clear_count (channel, count, count_all = 0) {
    if (count > 100) {
        count_all = count_all + 100;
        channel.bulkDelete(100).then(() => {clear_count(channel, count-100, count_all)});
    } else {
        channel.bulkDelete(count).then(messages => {
            count_all = count_all + messages.size;
            channel.send(`Удалено ${count_all} ${declOfNum(count_all, ['сообщение','сообщения','сообщений'])}.`).then((msg) => {msg.delete(3000);});
        });
    }
}

    
    if (message.author.bot) return;
    if (message.author.id === '321268938728144906') return message.chanel.send("доступ ограничен");
    //Отвечает за установку префикса в команды
    let prefixes = ['X1', 'X!', 'X@', 'x1', 'x!', 'x@','<@441667160025333762>'];
    let prefix = false;
    prefixes.forEach(prefix_ => {
        if (message.content.startsWith(prefix_)) {
            prefix = prefix_;
        }
    })
    if (prefix === false) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

	String.prototype.replaceAll = function(search, replacement) {
	let target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
	};
	
    //Эмулирует произвольный код из аккаунта.
    if (['eval', 'эмулировать'].includes(command) && (message.author.id === "361951318929309707" || message.author.id === "421030089732653057" || message.author.id === "242091351951409152")) {
	    actOWN = actOWN + 1;actALL = actALL +1;

	    //if(!message.author.id === "361951318929309707" || message.author.id === "421030089732653057" || message.author.id === "242091351951409152") return message.reply("Команда доступна только создателю и со-авторам.");
        //Захват кода.
        const code = args.join(" ").replace(/client\.token|client\[.token.\]/ig, 'process.env.TOKEN');
        const token = client.token.split("").join("[^]{0,2}");
        const rev = client.token.split("").reverse().join("[^]{0,2}");
        const filter = new RegExp(`${token}|${rev}`, "g");
        try {
            let output = eval(code);
            if (output instanceof Promise || (Boolean(output) && typeof output.then === "function" && typeof output.catch === "function")) output = await output;
            output = inspect(output, { depth: 0, maxArrayLength: null });
            output = output.replace(filter, "[TOKEN]");
            output = clean(output);
            if (output.length < 1950) {
                //Отправляет пользователю данные эмуляции.
                message.author.send(`\`\`\`js\n${output}\n\`\`\``);
                //Ставит реакцию (выполнено).
                message.react("✅")
            } else {
                message.author.send(`${output}`, {split:"\n", code:"js"});
            }
        } catch (error) {
            //Захватывает ошибку и говорит об этом.
            message.channel.send(`Произошла ошибка \`\`\`js\n${error}\`\`\``);
            //Ставит реакцию (Ошибка).
            message.react("❎")
        }

        function clean(text)  {
            return text
                .replace(/`/g, "`" + String.fromCharCode(8203))
                .replace(/@/g, "@" + String.fromCharCode(8203));
        }
    } /*else if(['restart'].includes(command)) {
	    function restart(channel) {
    channel.send("Начинаю перезагрузку...")
    .then(m => m.delete(5000))
    .then(() => client.destroy())
    .then(() => client.login(process.env.BOT_TOKEN))
    .catch(err => console.error(err))
    .then(() => message.channel.send("Перезапуск осуществлен"))
  }
  
  restart(message.channel)
} */
	if(['addrole'].includes(command)) {
		actMOD = actMOD + 1;actALL = actALL +1;
  if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply("Вы не являетесь модератором.");
  let role = message.mentions.roles.first();
  if (!role) return message.channel.send(`Выберите роль.`);
  let member = message.mentions.members.first();
  if (!member) return message.channel.send("Выберите пользователя.");
  let roleid = role.id;
  let rolename = role.name;
  
  if (!message.guild.roles.get(roleid)) return message.channel.send(`Роль не найдена..`);
  member.addRole(role.id);
  let em = new Discord.RichEmbed()
  .setTitle("Addrole")
  .setDescription(`Роль ${rolename} успешно добавлена к пользователю ${member.user.username}.`)
  .setTimestamp()
  message.channel.send({embed: em})
  if (member.displayName) {
    em.setDescription(`Роль ${rolename} успешно добавлена к пользователю ${member.displayName}.`)
  }
};
	    if(['tts'].includes(command)) {
		    actMOD = actMOD + 1;actALL = actALL +1;
	    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Вы не являетесь модератором.");
	    const ttsmessage = args.join(" ")
	    message.channel.send(ttsmessage, {tts: true});
	    message.delete(); 
    } else if(['count', 'копить'].includes(command)) {
	   // let replies = ['успех ✓', 'успех x2✓', 'неудача'];
	  //  let result = Math.floor((Math.random() * replies.length));
            message.channel.send(`${gameCount}, успех ✓`)
	    gameCount = gameCount + 1;actFUN = actFUN + 1;actALL = actALL +1;
            
    } else if(['iinvite', 'inviteInfo', 'infoInvite'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
	    let invi = args.join(" ")
  let invite = await client.fetchInvite(invi)
  if(!invite) return message.reply("Пожалуйста укажите приглашение")
  let igi = invite.guild.id
  if(!igi) return message.channel.send("Данное приглашение является недействительным или истекло.")

  let embed = new Discord.RichEmbed()
  .setTitle(invite.guild.name)
  .addField("Количество людей", invite.memberCount)
  .addField("Инвайтер", invite.inviter)
  .addField("Канал приглашения", invite.channel)
  .setColor("36393E")
  .setThumbnail(`https://cdn.discordapp.com/icons/${invite.guild.id}/${invite.guild.icon}.png`)

  message.channel.send(embed);
  
    }/* else if(['save'].includes(command)) {
	    
	    message.channel.send("**Disclaimer:** ваш ключ сохранен не навсегда, ключ будет удален при перезапуске бота.");
			if(args.length < 2){
				message.channel.send(`Сохраните сообщение в ключ \`${prefix}save <key> <message>\``);
				return;
			}
			var key = args[0];
			var messageToSave = "";
			for(var i = 0; i < args.length - 2; i++){
				messageToSave += args[i + 1] + " ";
			}
			messageToSave += args[args.length - 1];
			fs.readFile("save.json", "utf8", function(err, data){
				if(err) throw err;
				var save = JSON.parse(data);
				if(save[message.author.username] === undefined){
					save[message.author.username] = {};
				}
				save[message.author.username][key] = messageToSave;
				fs.writeFile("save.json", JSON.stringify(save), "utf8", function(err){
					if(err) throw err;
					message.channel.send(`Ваше сообщение сохранено под ключем \`${key}\`! :tada:`);
				});
			});
		} else if(['view'].includes(command)) {
			fs.readFile("save.json", "utf8", function(err, data){
				if(err) throw err;
				var save = JSON.parse(data);
				if(args.length === 0){
					var messageKeys;
					var savedMessages = "";
					try{
						messageKeys = Object.keys(save[message.author.username]);
					} catch(e){
						message.reply("У вас еще нет ключей, но вы можете их создать.");
						return;
					}
					if(messageKeys.length === 0){
						message.reply("У вас еще нет ключей, но вы можете их создать.");
						return;
					}
					for(var i = 0; i < messageKeys.length - 1; i++){
						savedMessages += messageKeys[i] + ", ";
					}
					savedMessages += messageKeys[messageKeys.length - 1];
					message.reply("Вот ваши ключи: **" + savedMessages + "**")
				} else{
					var key = args[0];
					var recalledMessage;
					try{
						recalledMessage = save[message.author.username][key];
					} catch(e){
						message.reply(`У вас нет ключей именуемые \`${key}\``)
						return;
					}
					message.channel.send(`${key}: ${recalledMessage}`);
				}
			});
		}*/
        if(['timer'].includes(command)) {
		actFUN = actFUN + 1;actALL = actALL +1;
        const vremya = args.join(" ");
  if(!vremya) return message.reply("Пожалуйста укажите время. \n**`x!timer [time]`**")
  if(vremya < 10000) return message.reply("Ваше число слишком мало");
  if(vremya > 31536000000) return message.reply("Ваше число превышает лимит.");
  if(vremya === 'NaN') return message.reply("Пожалуйста укажите время. \n**`x!timer [time]`**")
  let embed = new Discord.RichEmbed()
  .setTitle("Timer")

  .setDescription(`Ок, я засек ${Math.round(vremya / (1000 * 60 * 60 * 24))} дней, ${Math.round(vremya / (1000 * 60 * 60))} часов, ${Math.round(vremya / (1000 * 60)) % 60} минут, ${Math.round(vremya / 1000) % 60} секунд. \nЯ скажу когда время кончится.`)
  .setTimestamp()
  .setColor("0000ff")
  message.channel.send({embed})
  
  setTimeout(() => {
    embed.setDescription(`${message.author} время вышло.`)
    embed.setColor("#0000ff")
    message.channel.send({embed: embed})
  }, (vremya))
}
    if(['pinvite'].includes(command)) {
	    actMOD = actMOD + 1;actALL = actALL +1;
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Вы не являетесь модератором.");
        const members = message.guild.members.filter(member => member.user.presence.game && /(discord\.(gg|io|me)\/.+|discordapp\.com\/invite\/.+)/i.test(member.user.presence.game.name));
return message.channel.send(members.map(member => `\`${member.id}\` ${member.displayName}`).join("\n") || "людей используйщих presence как приглашение нету.");
	} else if(['emojify'].includes(command)) {
		actFUN = actFUN + 1;actALL = actALL +1;
        let text = args.join(" ");
        let new_text = '';
        for(let x = 0, sym=''; sym = text.charAt(x); x++) {
            if (sym !== undefined)
                switch (sym.toLowerCase()) {
                        //замена
                        case '1':
                        new_text += '1⃣';
                        break;
                        case '2':
                        new_text += '2⃣';
                        break;
                        case '3':
                        new_text += '3⃣';
                        break;
                        case '4':
                        new_text += '4⃣';
                        break;
                        case '5':
                        new_text += '5⃣';
                        break;
                        case '6':
                        new_text += '6⃣'; 
                        break;
                        case '7':
                        new_text += '7⃣';
                        break;
                        case '8':
                        new_text += '8⃣';
                        break;
                        case '9':
                        new_text += '9⃣';
                        break;
                        case '10':
                        new_text += '🔟';
                        break;
                        case '0':
                        new_text += '0⃣';
                        break;
                        case 'free':
                        new_text += '🆓';     
                        break;
                        case 'ok':
                        new_text += '🆗';
                        break;
                        case 'ng':
                        new_text += '🆖';
                        break;
                        case 'new':
                        new_text += '🆕';
                        break;
                        case 'cool':
                        new_text += '🆒';
                        break;
                        case 'up':
                        new_text += '🆙';
                        break;
                        case 'a':
                        new_text += '🅰';
                        break;
                        case ',':
                        new_text += '🔻';
                        break;
                        case 'b':
                        new_text +='\u200B🅱';
                        break;
                        case 'c':
                        new_text +='\u200B🇨';
                        break;
                        case 'd':
                        new_text +='\u200B🇩';
                        break;
                        case 'e':
                        new_text +='\u200B🇪';
                        break;
                        case 'f':
                        new_text +='\u200B🇫';
                        break;
                        case 'g':
                        new_text +='\u200B🇬';
                        break;
                        case 'h':
                        new_text +='\u200B🇭';
                        break;
                        case 'i':
                        new_text +='\u200B🇮';
                        break;
                        case 'j':
                        new_text +='\u200B🇯';
                        break;
                        case 'k':
                        new_text +='\u200B🇰';
                        break;
                        case 'l':
                        new_text +='\u200B🇱';
                        break;
                        case 'm':
                        new_text +='\u200B🇲'
                        break;
                        case 'n':
                        new_text +='\u200B🇳';
                        break;
                        case 'ñ':
                        new_text +='\u200B🇳';
                        break;
                        case 'o':
                        new_text +='\u200B🅾';
                        break;
                        case 'p':
                        new_text +='\u200B🅿';
                        break;
                        case 'q':
                        new_text +='\u200B🇶';
                        break;
                        case 'r':
                        new_text +='\u200B🇷';
                        break;
                        case 's':
                        new_text +='\u200B🇸';
                        break;
                        case 't':
                        new_text +='\u200B🇹';
                        break;
                        case 'u':
                        new_text +='\u200B🇺';
                        break
                        case 'v':
                        new_text +='\u200B🇻';
                        break;
                        case 'w':
                        new_text +='\u200B🇼';
                        break;
                        case 'x':
                        new_text +='\u200B🇽'
                        break;
                        case 'y':
                        new_text +='\u200B🇾';
                        break;
                        case 'z':
                        new_text +='\u200B🇿';
                        break;
                        case undefined:
                        break;
                    default:
                        new_text += sym;
                }
        }
        message.channel.send(new_text);
    } else if(['voice'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        if(args[0] === 'join') return message.member.voiceChannel.join(); message.channel.send("осуществлен вход в канал: **"+ message.member.voiceChannel.name + "**");
        if(args[0] === 'leave') return message.member.voiceChannel.leave(); message.channel.send("осуществлен выход из канала: **"+ message.member.voiceChannel.name + "**");
    } else if(['ascii'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        request('http://artii.herokuapp.com/make?text='+args.join(' '), function (error, response, body) {
            message.channel.send('<a:loading:435849475865575424> Обрабатываю запрос...').then(function(message) {
message.edit("```"+body+"```");
    }).catch(function() {});
});
	    //ALLERT DOLBAEB ALLERT//
    } else if(['github'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        request('https://github.com/search?utf8=✓&q='+args.join(' '), function (error, response, body) {
            message.channel.send('<a:loading:435849475865575424> Обрабатываю запрос...').then(function(message) {
message.edit(body);
    }).catch(function() {});
});
	    //ALLERT DOLBAEB ALLERT//
    } else if(['google'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
	    let searh = args.join(" ")
	    searh = searh.replaceAll('порно', 'котята')
	   /* message.content = message.content.replaceAll('порно', 'котята')*/
	    if(message.channel.guild.id === '417266233562365952') return message.reply("отключено для данного сервера");
let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searh)}`;
  message.channel.send(`Ищу в google ${searh}...`)
  return snekfetch.get(searchUrl).then((result) => {

    let $ = cheerio.load(result.text);
    let googleData = $('.r').first().find('a').first().attr('href');

    googleData = querystring.parse(googleData.replace('/url?', ''));
    message.channel.send(`Найден результат по запросу ${searh}:\n${googleData.q}`)

  }).catch((err) => {
    message.channel.send(`По запросу ${searh} ничего не найдено...`)
  });
             
} else if(['pin'].includes(command) && message.member.hasPermission('MANAGE_MESSAGES')) {
        let kanal = (args[0])
        let sms = (args[1])
        
        client.channels.get(kanal).fetchMessage(sms).then(msg => {msg.pin});
    } else if(['unpin'].includes(command) && message.member.hasPermission('MANAGE_MESSAGES')) {
        let kanal = (args[0])
        let sms = (args[1])
        
        client.channels.get(kanal).fetchMessage(sms).then(msg => {msg.unpin});   
    } else if(['react'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        let kanal = (args[0])
        let sms = (args[1])
        let reaction = (args[2])
        
        client.channels.get(kanal).fetchMessage(sms).then(msg => {msg.react(reaction)});
    } else if(['choose'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        
        if(!args[1]) return message.channel.send("**Слишком мало выборов, Пример: да нет**");

   let replies = [`${args[0]}`, `${args[1]}`];
   let result = Math.floor((Math.random() * replies.length));

   message.channel.send((replies[result]))
    } else if (['nya'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        //Вызывает эмодзи из массива после чего отправляет его.
                const emoj = client.emojis.get(emojis.nya); message.channel.send(`${emoj}`); message.delete();
    } else if (['ship'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        if(!args[0]) return message.channel.send("♥ **Упомяните пользователя или пользователей, которые вы хотите связать.** `x!ship <user> <user>`")

   var bondLevel = Math.floor(Math.random() * 102);
   let user1 = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   let user2 = message.guild.member(message.guild.members.get(args[1]));
   let user3 = message.guild.member(message.guild.members.get(args[2]));

    if (bondLevel > 100 ) {
        var ship = 'Идеальная пара <3_<3 :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel == 100) {
        var ship = 'Ммм. yже не так плоxо <3 :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel >= 90 && bondLevel < 100) {
        var ship = 'Отличная пара <3'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥🖤`
    } else
    if (bondLevel >= 80 && bondLevel < 90) {
        var ship = 'Отличная пара <3'
        var bondLevelResults = `♥♥♥♥♥♥♥♥🖤🖤`
    } else
    if (bondLevel >= 75 && bondLevel < 80) {
        var ship = 'Отличная пара <3'
        var bondLevelResults = `♥♥♥♥♥♥♥🖤🖤🖤`
    } else
    if (bondLevel >= 70 && bondLevel < 75) {
        var ship = 'Немного рискованно, но может работать! '
        var bondLevelResults = '♥♥♥♥♥♥♥🖤🖤🖤'
    } else
    if (bondLevel >= 60 && bondLevel < 70) {
        var ship = 'не все потерено.'
        var bondLevelResults = '♥♥♥♥♥♥🖤🖤🖤🖤'
    } else
    if (bondLevel >= 50 && bondLevel < 60) {
        var ship = '=/. '
        var bondLevelResults = `♥♥♥♥♥🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 40 && bondLevel < 50) {
        var ship = '... '
        var bondLevelResults = `♥♥♥♥🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 30 && bondLevel < 40) {
        var ship = 'Все плохо.'
        var bondLevelResults = `♥♥♥🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 25 && bondLevel < 30) {
        var ship = 'я не бyдy коментировать'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 20 && bondLevel < 25) {
        var ship = 'Rip'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 10 && bondLevel < 20) {
        var ship = 'Rip'
        var bondLevelResults = `​♥🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 0 && bondLevel < 10) {
        var ship = 'Не возможно...'
        var bondLevelResults = `🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    }


    if(!args[1]){
        var bondEmbed = new Discord.RichEmbed()

        .setColor("#f5a3fa")
        .addField("люди", `${message.author} ♥ ${args[0]}`)
        .addField("Очки соместимости", `${bondLevel}%`)
        .addField("Любовь..", bondLevelResults)
        .addField("Ответ", ship);


        return message.channel.send(bondEmbed)
    }
        
    if(args[0] === '<@361951318929309707>') {
        var bondEmbed5 = new Discord.RichEmbed()

        .setColor("#f5a3fa")
        .addField("люди", `${args[0]} ♥ ${args[1]}`)
        .addField("Очки соместимости", `100%`)
        .addField("Любовь..", `♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥`)
        .addField("Ответ", `Идеальная пара <3_<3 :ok_hand:`);


        return message.channel.send(bondEmbed5)
    }

    if(!args[2]){
        var bondEmbed2 = new Discord.RichEmbed()

        .setColor("#f5a3fa")
        .addField("люди", `${args[0]} ♥ ${args[1]}`)
        .addField("Очки соместимости", `${bondLevel}%`)
        .addField("Любовь..", bondLevelResults)
        .addField("Ответ", ship);


        return message.channel.send(bondEmbed2)
    }


    if(!args[3]) {

        var bondEmbed3 = new Discord.RichEmbed()

        .setColor("#f5a3fa")
        .addField("люди", `${args[0]} и ${args[1]} ♥ ${args[2]}`)
        .addField("Очки соместимости", `${bondLevel}%`)
        .addField("Любовь..", bondLevelResults)
        .addField("Ответ", ship);


        return message.channel.send(bondEmbed)
    }
}
    if (['poll'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        //Удаляет сообщение.
                message.delete().catch(O_o => {});
        //Захватывает сообщение.
        const say_poll_embed = args.join(" ");
        // Создает рич ембед.
        const embed = new Discord.RichEmbed()
        //Устанавливает цвет ("#color") для хеш или же (color).
            .setColor(16766720)
        //Устанавливает текст после чего вызывает захватаное сообщение и вставляет его.
            .setDescription(say_poll_embed)
        //Создает нижний текст.
            .setFooter("голосование.")
        //Ставит временую метку.
            .setTimestamp();
        //Отправляет ембед
        message.channel.send({
            embed
        }).then(function(message) {
            //Функция переходит на сообщение бота.
            message.react("✅")
            //Ставит реакцию (Согласен).
            message.react("❎")
            //Ставит реакцию (Несогласен).
        }).catch(function() {});
    } else if (['logo'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        const embed = new Discord.RichEmbed()
        .setTitle(message.channel.guild.name)
        .setImage(message.channel.guild.iconURL)
        .setFooter("logo")
        .setColor("#0000ff")
        message.channel.send({embed})
    } else if (['kick'].includes(command)) {
	    actMOD = actMOD + 1;actALL = actALL +1;
	    if(message.member.hasPermission('KICK_MEMBERS')) return message.reply("Вы не являетесь модератором");
            const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('кикнут').then(() => {
          message.reply(`успешно кикнул ${user.tag}`);
        }).catch(err => {
          message.reply('У меня недостаточно прав!');
          console.error(err);
        });
      } else {
        message.reply('Его нету на этом сервере!');
      }
    } else {
      message.reply('У тебя нет прав!');
    }
  } else if (['xkick'].includes(command) && message.author.id === "361951318929309707") {
	  actOWN = actOWN + 1;actALL = actALL +1;
            const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('кикнут').then(() => {
          message.reply(`успешно кикнул ${user.tag}`);
        }).catch(err => {
          message.reply('У меня недостаточно прав!');
          console.error(err);
        });
      } else {
        message.reply('Его нету на этом сервере!');
      }
    } else {
      message.reply('У тебя нет прав!');
    }
  } else if (['avatar', 'av'].includes(command)) {
	  actFUN = actFUN + 1;actALL = actALL +1;
        //задает 1 слово как пользователя
        let member = message.mentions.members.first();
      if (!member) {
          member === message.author.id
          }
        //если пользователь не найден или вписано не правильно выдает ошибку
        let embederr = (`${message.author}, пользователя нет на данном сервере.`);
        //если пользователя нет выполняет действие
        if (!member)
            //вызывает текст ошибки
            return message.channel.send({embederr});
        //новый рич ембед
            const embed = new Discord.RichEmbed()
            //создает заголовок
                .setTitle(`Аватар пользователя ${member.user.tag}`)
            //создает изображение
                .setImage(member.user.avatarURL)
            //нижний текст
                .setFooter("Avatar")
            //задает цвет
                .setColor("#0000ff")
            //отправляет
            message.channel.send({embed});
    } else if (['afk'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        message.delete();
        const afkMessage = args.join(" ");
        const embed = new Discord.RichEmbed()
        .setTitle(`${message.author.username}, ненадолго отошел`)
        .setDescription(afkMessage.replace(/`/g, "\\`"))
        .setThumbnail('https://images-ext-1.discordapp.net/external/zOQcnhsC7Ud8tPF-pJQpt51YyrvvP-xwH5c9v02p4Ys/https/thumbs.gfycat.com/SinfulCompetentBeaver-max-1mb.gif?width=80&height=80')
        .setColor('0000ff')
        message.channel.send({embed}).then(function(message) {
            //Функция переходит на сообщение бота.
            message.react('💤')
        }).catch(function() {});
    } else if (['summon'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        let summoned = message.mentions.members.first();
        if (!summoned) return;
        if (summoned.id === '421030089732653057') return message.channel.send('соси хуй :3');
        const SummonMessage = args.join(" ");
        args.shift();
        message.delete();
        summoned.send(`Вас вызвали на сервере **${message.channel.guild.name}**. \nПользователем **${message.author}** (**${message.author.username}**) \nВ канале **${message.channel}** \n**Для быстрого перехода нажмите на название канала.** \nНужда:**${SummonMessage}** `)
    } else if (['warn'].includes(command)) {
	    actMOD = actMOD + 1;actALL = actALL +1;
        let member = message.mentions.members.first();
    args.shift();
    const WarnMessage = args.join(" ");
        if (!member.user.id) return message.channel.send("Пользователь не указан.");
        if (member.user.id === message.author.id) return message.channel.send("Невозможно выписать предупреждение самому себе.");
        if (member.user.id === message.author.bot) return message.reply('Невозможно предупредить бота.');
    if (member.user.id === message.channel.guild.ownerID) return message.channel.send("Невозможно предупредить создателя сервера.");
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Вы не являетесь модератором");

    message.channel.send(`Пользователь ${member.user} получил предупреждение по причине: **` + WarnMessage + "**");
    } else if (['embedsay'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
  const embedColor = args.shift();
        const embedsayMessage = args.join(" ");
      
        const embed = new Discord.RichEmbed()
        .setColor(embedColor);
        if (embedsayMessage)
       embed .setDescription(embedsayMessage)
        message.channel.send({embed});
        message.delete().catch(O_o => {});
    } else if (['about'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
  
        let users = 0;
client.guilds.forEach((guild) => {users += client.users.size});
        const embed = new Discord.RichEmbed()
            .setColor("#00ff00")
            .setTitle('Статистика')
            .setDescription('Команды указаны за данный запуск')
            .setThumbnail(client.user.avatarURL);
        embed.addField('Пинг', client.ping, true);
	embed.addField("UpTime", `${Math.round(client.uptime / (1000 * 60 * 60 * 24))} дня(дней), ${Math.round(client.uptime / (1000 * 60 * 60))} часа(ов), ${Math.round(client.uptime / (1000 * 60)) % 60} минут, ${Math.round(client.uptime / 1000) % 60} секунд`)
        /*embed.addField('ОЗУ', process.env.WEB_MEMORY + 'мб / ' + process.env.MEMORY_AVAILABLE + 'мб', true);
        embed.addField('Сервер', process.env.DYNO, true);
        embed.addField('Порт', process.env.PORT, true);*/
        embed.addField('Количество серверов', client.guilds.size)
        embed.addField('Количество пользователей', client.users.size)
        embed.addField('Количество каналов', client.channels.size)
        embed.addField('Модуль FUN использован', `${actFUN} раз.`)
        embed.addField('Модуль MOD использован', `${actMOD} раз.`)
        embed.addField('Модуль OWN использован', `${actOWN} раз.`)
        embed.addField('Модуль REACTION использован', `${actRCT} раз.`)
        embed.addField('Модуль IMAGE использован', `${actIMG} раз.`)
        embed.addField('Модуль NSFW использован', `${actNSFW} раз.`)
        embed.addField('Использовано команд за этот запуск', `${actALL} раз.`)
        embed.addField('Со-Авторы', '<@421030089732653057>')
        message.channel.send(embed);
        message.delete();

    } else if (['servers'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        let guilds = [];
        client.guilds.forEach(function (guild) {guilds.push(guild.name.replace(/`/g, "`" + String.fromCharCode(8203)) + ' OWNER: ' + guild.owner.user.tag.replace(/`/g, "`" + String.fromCharCode(8203)) + ' ID: ' + guild.id)});
        let output = guilds.join('\n');
        if (output.length < 1950) {
            message.author.send(`\`\`\`json\n${output}\n\`\`\``);
        } else {
            message.author.send(`${output}`, {split:"\n", code:"json"});
            }
    } else if (['prune'].includes(command) && message.member.hasPermission('MANAGE_MESSAGES')) {
	    actMOD = actMOD + 1;actALL = actALL +1;
        const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Введите любое число не больше 99 и не меньше 2.");
    
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Не могу удалить сообщения так как: ${error}`));
  } if (['xban'].includes(command) && message.author.id === "361951318929309707") {
        actOWN = actOWN + 1;actALL = actALL +1;
if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**У вас не xватает прав чтобы забанить человека.**");

    let member = message.mentions.members.first();

    if(!member)
    return message.channel.send("**Укажите цель.** `x!ban [user]`");

    if(!member.bannable)
    return message.channel.send("** Я не могу забанить этого пользователя. ** У пользователя может быть больше прав, чем у меня, или у меня нет прав.");

    let reason = args.slice(1).join(' ');
    if(!reason)
    return message.channel.send("**Нужно указать причину.**");

    await member.ban(reason)
      .catch(error => message.channel.send(`У вас нет прав. **${error}**`));

    if(!reason){
        const channel = member.guild.channels.find('name', "logs");
        message.channel.send(`${member.user.username} Был забанен пользователем ${message.author.username}`);
        let Banembed = new Discord.RichEmbed()
        .setDescription("Ban")
        .setColor("#ff0000")
        .setTimestamp()
        .addField('Какой человек был забанен', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
        .addField('Кем был забанен', `${message.author.username}#${message.author.discriminator}`)
        .addField('Reason', "причина не указана");
        message.channel.send(Banembed);
    }

    message.channel.send(`${member.user.username} Был забанен ${message.author.username} по причине : **${reason}**`);
    const channel = member.guild.channels.find('name', "logs");
    let Banembed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#ff0000")
    .setTimestamp()
    .addField('Какой человек был забанен', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
    .addField('Кем был забанен', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
    message.channel.send(Banembed);
}
    if (['ban'].includes(command)){
	    actMOD = actMOD + 1;actALL = actALL +1;
        //message.author.id === "361951318929309707")
if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**У вас не xватает прав чтобы забанить человека.**");

    let member = message.mentions.members.first();

    if(!member)
    return message.channel.send("**Укажите цель.** `x!ban [user]`");

    if(!member.bannable)
    return message.channel.send("** Я не могу забанить этого пользователя. ** У пользователя может быть больше прав, чем у меня, или у меня нет прав.");

    let reason = args.slice(1).join(' ');
    if(!reason)
    return message.channel.send("**Нужно указать причину.**");

    await member.ban(reason)
      .catch(error => message.channel.send(`У вас нет прав. **${error}**`));

    if(!reason){
        const channel = member.guild.channels.find('name', "logs");
        message.channel.send(`${member.user.username} Был забанен пользователем ${message.author.username}`);
        let Banembed = new Discord.RichEmbed()
        .setDescription("Ban")
        .setColor("#ff0000")
        .setTimestamp()
        .addField('Какой человек был забанен', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
        .addField('Кем был забанен', `${message.author.username}#${message.author.discriminator}`)
        .addField('Reason', "причина не указана");
        message.channel.send(Banembed);
    }

    message.channel.send(`${member.user.username} Был забанен ${message.author.username} по причине : **${reason}**`);
    const channel = member.guild.channels.find('name', "logs");
    let Banembed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#ff0000")
    .setTimestamp()
    .addField('Какой человек был забанен', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
    .addField('Кем был забанен', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
    message.channel.send(Banembed);
}
    if (['report'].includes(command) && message.channel.guild.id === "409966133547106305") {
	    actFUN = actFUN + 1;actALL = actALL +1;
        const embed = new Discord
            .RichEmbed().setColor("0000ff")
            .addField('Сообщение', args.join(' '))
            .addField('Пользователь', message.author);
        let nick = message.author.username;
        if (message.member.nickname != null) nick = message.member.nickname;
        client.fetchWebhook('435789439952879647', 'gsECXitzpbfRRtSJMVuk49hf02bPgfFXGmbbOO_10E6-StehdMSuUn0o07zwk371CAwK').then(webhook => {
            webhook.send('', {username: nick, avatarURL: message.author.avatarURL, embeds: [embed]}).catch(console.error);
        }).catch(console.error);
        message.channel.send(`**Репорт пользователя ${message.author} принят.**`);
        message.delete();
	  
    } else if (['createEmoji'].includes(command)) {
	    actMOD = actMOD + 1;actALL = actALL +1;
	    if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.reply("у вас нету нужных прав");
	    const url = args[0];
	    const name = args[1];
	    if(!url) return message.reply("нужна ссылка на картинку")
	    if(!url) return message.reply("нужно название");
	    message.channel.guild.createEmoji(url, name)
	    message.reply(`эмодзи :${name}: успешно создано.`)
    } else if (['vote'].includes(command) && message.channel.guild.id === "422775194281705493") {
	    actFUN = actFUN + 1;actALL = actALL +1;
        const embed = new Discord
            .RichEmbed().setColor("0000ff")
            .setDescription(args.join(' '))
            .addField('Автор', message.author);
        let nick = message.author.username;
        if (message.member.nickname != null) nick = message.member.nickname;
        client.fetchWebhook('432592245850374154', 'uC5qHLjDtA-AVW5PU4nCKtq4JMohqm855pdiQzo8i3b0c4Saraxv_Iz-I4I7A4fDr6In').then(webhook => {
            webhook.send('', {username: nick, avatarURL: message.author.avatarURL, embeds: [embed]}).catch(console.error);
        }).catch(console.error);
        message.channel.send(`**Голосование пользователя ${message.author} успешно начато**`);
        message.delete();
    } else if(['vote'].includes(command) && message.channel.guild.id === "435163536914907158") {
	    actFUN = actFUN + 1;actALL = actALL +1;
        const embed = new Discord
            .RichEmbed().setColor("0000ff")
            .setDescription(args.join(' '))
            .addField('Автор', message.author);
        if (message.member.nickname != null) nick = message.member.nickname;
        client.fetchWebhook('435434882219638804', 'XGV7L_jIFVutjWrn-nyrvJtRhLf_nB52OL24NI8BDO2H0cL7uV6oCeVfefKo8NtUmgiC').then(webhook => {
            webhook.send('', {username: nick, avatarURL: message.author.avatarURL, embeds: [embed]}).catch(console.error);
        }).catch(console.error);
        message.channel.send(`**Голосование пользователя ${message.author} успешно начато**`);
        message.delete();
	    const invi = '0';
    } else if(['si', 'serverinfo'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        message.channel.guild.fetchInvites().then(invites => invi === invites.size);
        if (message.channel.guild.large == true) {
            large = "Да"
        }
        if (message.channel.guild.large == false) {
            large = "Нет"
        }
        if (message.channel.guild.region == "russia") {
            message.channel.guild.region = "Россия"
        }
        let i = 0;
  message.guild.members.forEach(member => {
      if(!member.user.bot) i = i + 1;
  });
        let b = 0;
  message.guild.members.forEach(member => {
      if(member.user.bot) b = b + 1;
      });
/*        
message.guild.channels.filter(chan => chan.type === 'voice').forEach((channel) => {voice += channel.members.size});
*/
                const embed = new Discord.RichEmbed()
                embed.setAuthor(message.author.tag, message.author.avatarURl)
                embed.setTitle('Информация об сервере', message.channel.guild.name)
                embed.setColor("ff0000")
                embed.setThumbnail(message.channel.guild.iconURL)
                embed.addField('>ID<', message.channel.guild.id, false)
                embed.addField('>Owner<', message.channel.guild.owner, true)
                embed.addField('Owner ID', message.channel.guild.ownerID, false)
                embed.addField('>Уровень верификации<', message.channel.guild.verificationLevel, true)
                embed.addField('>Количество пользователей<', `${message.channel.guild.memberCount} пользователей из которых ${b} ботов и ${i} людей`, false)
                //embed.addField('>Пользователи в голосовых каналах (всего)', voice)
                embed.addField('>Количество ролей<', message.channel.guild.roles.size, true)
                embed.addField('>Количество эмодзи<', message.channel.guild.emojis.size, false)
                embed.addField('>Количество каналов<', message.channel.guild.channels.size, true)
                embed.addField('>Сервер большой?<', large, false)
                embed.addField('>Системный канал<', message.channel.guild.systemChannel !== null ? message.channel.guild.systemChannel : 'Нету.', true)
                embed.addField('>ID Системного канала<', message.channel.guild.systemChannelID !== null ? message.channel.guild.systemChannelID : 'Нету.', false)
                embed.addField('>Имя сервера<', message.channel.guild.name, true)
                embed.addField('>Сокращеное имя сервера<', message.channel.guild.nameAcronym, false)
                embed.addField('>Высшая роль<', message.channel.guild.roles.sort((a, b) => a.position - b.position || a.id - b.id).last().name, true)
                embed.addField('>AFK канал<', message.channel.guild.afkChannel !== null ? message.channel.guild.afkChannel : 'Нету.', false)
                embed.addField('>ID AFK канала<', message.channel.guild.afkChannelID !== null ? message.channel.guild.afkChannelID : 'Нету.', true)
                embed.addField('>Регион<', message.channel.guild.region, false)
                embed.setFooter(`requested by ${message.author.username}`)
                embed.setTimestamp(); message.react("✅");
            message.channel.send({embed});
    } else if(['h', 'help'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author, message.author.avatarURL)
            .setTitle('Команды бота.')
            .setColor("#42f4aa")
            .setThumbnail('https://cdn.pixabay.com/photo/2016/06/15/15/02/info-1459077_960_720.png')
            .addField("Fun", "**x!say** сообщение от бота. \n**x!embed** (x!helpembed) embed сообщение от бота. \n**x!rs [ид канала] [сообщение]** отослать сообщение из 1 чата в другой. \n**x!invite** пригласить бота на сервер.) \n**x!servers** узнать сервера бота,их создателей, их ID. (Временно недоступно)\n**x!roles** узнать роли сервера. \n**x!afk** <причина> \n**x!ping** проверка. \n**x!ship** проверка совместимости. \n**x!summon** [user] <reason> - вызвать пользователя с причиной (или без) \n**x!about** информация об количествах серверов, пользователей, каналов. \n**x!userinfo** информация об вас. \n**x!serverinfo** информация об сервере. \n**x!nya** тест команда эмодзи. \n**x!poll** создать голосование. \n**x!idea** идея по поводу сервера. (Quasar only) \n**x!vote** начать голосование (Galactic empire only) \n**x!avatar** просмотр аватара. \n**бот пиши** начну писать в чат где вы меня вызвали. \n**бот не пиши** перестану писать в чат где вы меня вызвали.")
            .addField("Fun (continued)", "**x!logo** узнать иконку сервера. \n**x!ascii** [text] - перевести текст в ascii \n**x!emojify** [text] - перевод текста в эмодзи \n**x!timer** [time - ms] - запуск таймера, время учитывается в миллисекундах (1000ms = 1 секунда) \n**x!save** [key] [text] - сохранить ключ. \n**x!view** <key> - просмотреть список ключей или просмотреть ключ. \n**x!inviteInfo** [invite] - информация про приглашение. \n**x!count** - добавить +1")
            .addField("Mod", "**x!ban** [user] -бан пользователя. \n**x!kick** [user] - кик пользователя. \n**x!addrole** [role | user] [user | role] - добавить роль пользователю \n**x!warn** предупредить пользователя. \n**x!createEmoji** [url] [name] - создать эмодзи. \n**x!pinvite** - проверить на наличие приглашений в статусах. \n**x!prune** - удалить последние 50 сообщений. \n**x!tts** [text] - tts Сообщение.")
            .addField("Bot own", "**x!eval** [code] - эмуляция js кода. \n**x!presence** __[type] [status]__ - смена статуса. \n**x!us** - приватное сообщение от лица бота.")
            .addField("Reactions", "**x!kiss** [user] - поцелуй. \n**x!pat** [user] - погладить. \n**x!nom** [user] - дать поесть. \n**x!slap** [user] - ударить. \n**x!hug** [user] - обнять. \n**x!cuddle** [user] - прижаться. \n**x!tickle** [user] - пощекотать. \n**x!poke** [user] - тыкнуть.")
            .addField("Images", "**x!waifu** - рандомное waifu изображение. \n**x!neko** - рандомное neko изображение. \n**x!cat** - рандомное изображение с котом.")
            .addField("NSFW", "**x!pussy** \n**x!anal** \n**x!hentai** \n**x!boobs** \n**x!nNeko**")
            .addField("utility (временно недоступно)", "**x!pin** [channel id] [message id] - закрепить сообщение ботом. \n**x!unpin** [channel id] [message id] - открепить сообщение ботом.")
            .addField("Голос", "[Если вам нравится данный бот - вы можете проголосовать за него тут](https://discordbots.org/bot/441667160025333762) \nГолосовать за одного и того же бота можно каждые 24 часа с 1 и того же аккаунта.")
            .setFooter(message.channel.guild.name)
            .setTimestamp();
        message.channel.send({embed});
    } else if (['helpembed'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        message.channel.send("```{description: текст описания} \n{title: текст заголовка} \n{field: имя | value: текст} \n{timestamp}(временая метка) \n{footer: нижний текст} \n{color: #цвет} \n{image: url} \n{thumbnail url}```")
        message.channel.send("Пример: ```x!embed {thumbnail: https://cdn.discordapp.com/emojis/429653035984355338.png}{title: hello world}{description: привет ☮️}{field: пункт 1 | value: содержание пункта}{timestamp}{footer: XeVAL}{color: 00ff00}```")
    } else if(['userinfo', 'ui'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
                message.delete().catch(O_o => {});
        let member = message.guild.members.get(message.author.id);

        let username = message.author.username
        let avatar = message.author.avatarURL
        let verified = "Нет"
        let userStatus = "Оффлайн"
        let userID = message.author.id

        if (message.author.verified == true) {
            verified = "Да"
        }
        if (message.author.status == "online") {
            userStatus = "Онлайн"
        }
        
        
        let joinedDate = member.joinedAt;
        let joinedMonth = joinedDate.getMonth() + 1;

        let createdDate = message.author.createdAt;
        let createdMonth = createdDate.getMonth() + 1;

        const embed = new Discord.RichEmbed()
            .setColor("ff0000")
            .setAuthor(message.author.tag, message.author.avatarURl)
            .addField("ID пользователя:", message.author.id, false)
            .addField("Дискриминатор:", message.author.discriminator, false)
            .addField("Полный никнейм:", message.author.tag, false)
            .addField("Последнее сообщение:", message.author.lastMessage, false)
            .addField("ID Последнего сообщения:", message.author.lastMessageID, false)
            .addField("Создан:", (createdDate.getDate() < 10 ? '0' : '') + createdDate.getDate() + "." + (createdDate.getMonth() < 10 ? '0' : '') + createdMonth + "." + createdDate.getFullYear() + " " + (createdDate.getHours() < 10 ? '0' : '') + createdDate.getHours() + ":" + (createdDate.getMinutes() < 10 ? '0' : '') + createdDate.getMinutes() + ":" + (createdDate.getSeconds() < 10 ? '0' : '') + createdDate.getSeconds(), false)
            .addField("Аккаунт верифицирован?", message.author.verified, false)
            .addField("Присоеднился к серверу:", (joinedDate.getDate() < 10 ? '0' : '') + joinedDate.getDate() + "." + (joinedDate.getMonth() < 10 ? '0' : '') + joinedMonth + "." + joinedDate.getFullYear() + " " + (joinedDate.getHours() < 10 ? '0' : '') + joinedDate.getHours() + ":" + (joinedDate.getMinutes() < 10 ? '0' : '') + joinedDate.getMinutes() + ":" + (joinedDate.getSeconds() < 10 ? '0' : '') + joinedDate.getSeconds(), false)
            .setThumbnail(avatar)
            .setFooter("Userinfo")
            .setTimestamp(); message.react("✅");
        message.channel.send({
            embed
        });
    } else if(['say'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        const sayMessage = args.join(" ")
              if (message.channel.guild.id === 389335832693309441) {
                  sayMessage = "Отключено для данного сервера"
                  }
        message.delete().catch(O_o => {});
        message.channel.send(sayMessage);
    } else if (['us'].includes(command) && message.author.id === "361951318929309707" || message.author.id === "242091351951409152") {
	    actOWN = actOWN + 1;actALL = actALL +1;
                if (message.guild.members.get === undefined) {
            return message.channel.send('Ошибка отправки сообщения');
        }
        let new_args = args;
        const userse = new_args.shift();
        const UsersayMessage = new_args.join(" ");
        console.log(userse);
               message.guild.members.get(userse).send(UsersayMessage);message.delete();
    } else if (['rs'].includes(command) && message.member.hasPermission('MANAGE_MESSAGES')) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        if (message.channel.id === undefined) {
            return message.channel.send('Ошибка отправки сообщения');
        }
        let new_args = args;
        const chat = new_args.shift();
        const sayMessage = new_args.join(" ");
        console.log(chat);
        message.guild.channels.get(chat).send(sayMessage).catch(()=>{message.reply('ты ебобо?');});
        message.delete().catch(O_o=>{});
    } else if(['invite'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        const embed = new Discord.RichEmbed()
            .setTitle('Приглашение бота на ваш сервер.')
            .setColor("#0000ff")
            .setDescription("Ссылка на бота https://discordapp.com/oauth2/authorize?&client_id=441667160025333762&scope=bot&permissions=8 \nЕсли вы не желаете давать боту права `SERVER_MANAGE` то перейдите по данной ссылке: \nhttps://discordapp.com/oauth2/authorize?&client_id=441667160025333762&scope=bot&permissions=0")
            .setFooter(message.channel.guild.name)
            .setTimestamp(); message.react("✅"); console.log(`${message.author} использовал invite`)
        message.channel.send({embed});
    } else  if (['ping'].includes (command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        const emoj = client.emojis.get(emojis.nya);
        message.channel.send("ping?").then((msg) => {
setTimeout(function () {
msg.edit(`Pong! Задержка ${message.createdTimestamp - message.createdTimestamp}ms. API задержка ${Math.round(client.ping)}ms`);
}, 1);
})
        console.log("pong!");
    } else if(['test'].includes (command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        message.channel.send('PEDO').then((msg) => {
setTimeout(function () {
msg.delete();
message.channel.send('RAS');
}, 2000);
})
    } else if(['presence'].includes(command) && message.author.id === "361951318929309707") {
	    actOWN = actOWN + 1;actALL = actALL +1;
        let new_args = args;
        if (new_args[0].toLowerCase() === 'играет' && new_args[1].toLowerCase() === 'в') {
            new_args[0] = 'играет в';
            new_args.splice(1, 1);
        }
        let type = new_args.shift();
        let real_type;
        if (['играет в', 'играет', 'play', 'playing', '0'].includes(type.toLowerCase()))
            real_type = 0;
        else if (['слушает', 'hear', 'hearing', '2'].includes(type.toLowerCase()))
            real_type = 2;
        else if (['смотрит', 'watch', 'watching', '3'].includes(type.toLowerCase()))
            real_type = 3;
        else return message.channel.send(`Ошибка. Тип \`${type.replace(/` /g, "\'")}\` не существует`);
        const status = new_args.join(" ");
        client.user.setPresence({ game: { name: status, type: real_type } }).catch();
        let status_word;
        if (real_type === 0)
            status_word = 'Играет в';
        else if (real_type === 2)
            status_word = 'Слушает';
        else if (real_type === 3)
            status_word = 'Смотрит';

        const embed = new Discord.RichEmbed()
            .setTitle('Статус изменен на:')
            .setDescription(`${status_word} **${status.replace(/` /g, "\\\'")}**`)
            .setFooter('Presence');
        message.channel.send({embed});
        message.delete();
    } else if(['beval'].includes(command) && message.author.id === "361951318929309707") {
	    actOWN = actOWN + 1;actALL = actALL +1;
        try {
            let evaled = vm.runInContext(args.join(" "), codeContext);
            message.channel.send(evaled, {code:"js",split:"\n"});
        } catch(e) {
            message.channel.send(e, {code:"js",split:"\n"});
        }
    } else if (['roles'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        let roles = [];
        message.guild.roles.forEach((role, num, roles_all) => {
            roles[roles_all.size-role.position] = role.name.replace(/`/g, "`" + String.fromCharCode(8203))
        });
        const embed = new Discord.RichEmbed()
        .setTitle(`Роли сервера ${message.channel.guild.name}`)
        .setThumbnail(message.channel.guild.iconURL)
        .setColor("#0000ff")
        .setDescription('```'+roles.join('\n')+'```')
        .setFooter("Могут быть показаны не все роли.")
        message.channel.send({embed});
    } else if (['embed', 'e'].includes(command)) {
	    actFUN = actFUN + 1;actALL = actALL +1;
        try {
            let text = args.join(" ").replace(/\n/g, "\\n");
            let embed = new Discord.RichEmbed();
            let footer = text.match(/{footer:(.*?)( \| icon: ?(.*?))?}/i);
            if (footer !== null) {
                embed.setFooter(footer[1], footer[3])
            }
            let image = text.match(/{image: ?(.*?)}/i);
            if (image !== null) {
                embed.attachFile({
                    attachment: image[1],
                    file: image[1].substring(image[1].lastIndexOf('/') + 1)
                }).setImage('attachment://'+image[1].substring(image[1].lastIndexOf('/') + 1));
            }
            let thumb = text.match(/{thumbnail: ?(.*?)}/i);
            if (thumb !== null) {
                embed.attachFile({
                    attachment: thumb[1],
                    file: thumb[1].substring(thumb[1].lastIndexOf('/') + 1)
                }).setThumbnail('attachment://'+thumb[1].substring(thumb[1].lastIndexOf('/') + 1));
            }
            let author = text.match(/{author:(.*?)( \| icon: ?(.*?))?( \| url: ?(.*?))?}/i);
            if (author !== null) {
                embed.setAuthor(author[1], author[3], author[5])
            }
            let title = text.match(/{title:(.*?)}/i);
            if (title !== null) {
                embed.setTitle(title[1])
            }
            let url = text.match(/{url: ?(.*?)}/i);
            if (url !== null) {
                embed.setURL(url[1])
            }
            let description = text.match(/{description:(.*?)}/i);
            if (description !== null) {
                embed.setDescription(description[1].replace(/\\n/g, '\n'))
            }
            let color = text.match(/{colou?r: ?(.*?)}/i);
            if (color !== null) {
                embed.setColor(color[1])
            }
            let timestamp = text.match(/{timestamp(: ?(.*?))?}/i);
            if (timestamp !== null) {
                if (timestamp[2] === undefined || timestamp[2] === null)
                embed.setTimestamp(new Date());
                else
                embed.setTimestamp(new Date(timestamp[2]));
            }
            let fields = text.match(/{field: ?(.*?) \| value: ?(.*?)( \| inline)?}/gi)
            if (fields !== null) {
                fields.forEach((item) => {
                if (item[1] == null || item[2] == null || typeof item[1] === "undefined" || typeof item[2] === "undefined") return;
                let matches = item.match(/{field: ?(.*?) \| value: ?(.*?)( \| inline)?}/i);
                embed.addField(matches[1], matches[2], (matches[3] != null));
            });}
            message.channel.send({embed});
            message.delete();
        } catch(e) {
            message.channel.send({embed: (new Discord.RichEmbed).setTitle('Ошибка').setDescription('Ошибка отправки эмбэда').setColor('#C34E4E').setImage('https://cdn.discordapp.com/attachments/402148224628162562/454380809806151701/tumblr_oa4nyiWwH61smiv11o1_400.gif')}).then(msg => msg.delete(10000));
            console.error(e);
        }
    } else if(['slap'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/slap', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle('>:{')
                        .setDescription(`${user} дал(а) пощёчину ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#ff0000')
			.setFooter("powered by nekos.life");
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['kiss'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
    message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/kiss', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(':3')
                        .setDescription(`${user} поцеловал(а) ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#ffff00')
			.setFooter("powered by nekos.life");
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['tickle'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
    message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/tickle', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} пощекотал(а) ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#ffff00')
			.setFooter("powered by nekos.life");
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['cuddle'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/cuddle', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(':3')
                        .setDescription(`${user} прижался(ась) к ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#00ffff')
			.setFooter("powered by nekos.life");
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['pat'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/pat', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(':3')
                        .setDescription(`${user} погладил(а) по голове ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#ffff00')
			.setFooter("powered by nekos.life");
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['hug'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/hug', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(':3')
                        .setDescription(`${user} обнял(а) ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#ffff00')
		    .setFooter("powered by nekos.life");
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['poke'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/poke', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(':3')
                        .setDescription(`${user} тыкнул(а) в ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#ffff00')
		        .setFooter("powered by nekos.life")
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['neko'].includes(command)) {
	    actIMG = actIMG + 1;actALL = actALL +1;
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/neko', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle("Рандомная картинка Neko")
                        .setImage(arr['url'])
                        .setColor('#0000ff')
		        .setFooter("powered by nekos.life");
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['waifu'].includes(command)) {
	    actIMG = actIMG + 1;actALL = actALL +1;
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/waifu', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle("Рандомная картинка Waifu")
                        .setImage(arr['url'])
                        .setColor('#0000ff')
		        .setFooter("powered by nekos.life");
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } 
    else if(['feed', 'nom'].includes(command)) {
	    actRCT = actRCT + 1;actALL = actALL +1;
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = client.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/feed', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} дал(а) покушать ${user1}`)
                        .setImage(arr['url'])
                        .setColor('#ffff00')
		        .setFooter("powered by nekos.life");
                    msg.edit(`${user1}`, {embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['cat'].includes(command)) {
        actIMG = actIMG + 1;actALL = actALL +1;
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/meow', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle("Рандомная картинка cat")
                        .setImage(arr['url'])
                        .setColor('#0000ff')
		        .setFooter("powered by nekos.life");
		
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['anal'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply("На данной команде стоит метка **`NSFW`**");
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/anal', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle("Рандомная картинка anal")
                        .setImage(arr['url'])
                        .setColor('#0000ff')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['hentai'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply("На данной команде стоит метка **`NSFW`**");
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/hentai', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle("Рандомная картинка hentai")
                        .setImage(arr['url'])
                        .setColor('#0000ff')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['boobs'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply("На данной команде стоит метка **`NSFW`**");
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/boobs', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle("Рандомная картинка boobs")
                        .setImage(arr['url'])
                        .setColor('#0000ff')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['pussy'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply("На данной команде стоит метка **`NSFW`**");
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/pussy', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle("Рандомная картинка pussy")
                        .setImage(arr['url'])
                        .setColor('#0000ff')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    } else if(['nneko', 'nNeko'].includes(command)) {
	    actNSFW = actNSFW + 1;actALL = actALL +1;
        if (!message.channel.nsfw) return message.reply("На данной команде стоит метка **`NSFW`**");
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/nsfw_neko_gif', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle("Рандомная картинка nsfw neko")
                        .setImage(arr['url'])
                        .setColor('#0000ff')
                        .setFooter(`requested by ${message.author.username} | powered by nekos.life`);
                    msg.edit({embed});
                } catch (e) {console.log(e)}
            });
        });
    }
});

client.login(process.env.BOT_TOKEN).catch(console.error);
//process.env.BOT_TOKEN = 'NO';

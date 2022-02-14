//INI BASE ORI RAMDANI (GW) LU JAN NGAKU-NGAKU DAH
//KALO MAU AMBIL CASE TAG NAMA RAMDANI OFFICIAL
//SC INI DIJUAL? / AUTHOR NYA DI GANTI? 
//SELOW REST API GW OFF IN!
//KASIH CREDIT SAYANG
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   generateWAMessage,
	generateWAMessageFromContent,
   processTime,
} = require('@adiwajshing/baileys')
const { default : makeWASocket, prepareWAMessageMedia,} = require('@adiwajshing/baileys-md')
const { color, bgcolor } = require('./Z1/color')
const { help } = require('./Z4/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./Z1/functions')
const { fetchJson, fetchText } = require('./Z1/fetcher')
const { recognize } = require('./Z1/ocr')
const { rules } = require('./Z1/rules') 
const { yta, ytv, igdl, upload, formatDate } = require('./Z1/ytdl')
const { donasi } = require('./Z1/donasi')
const { grupbot } = require('./Z1/grupbot')
const yts = require( 'yt-search')
const { pinterest } = require('./Z1/pinterest')
const { iklan } = require('./Z1/iklan')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const hx = require('hxz-api')
const crypto = require('crypto')
const axios = require('axios')
const ffmpeg = require('fluent-ffmpeg')
const welkom = JSON.parse(fs.readFileSync('./Z4/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./Z2/antilink.json'))
const antiunchek = JSON.parse(fs.readFileSync('./Z2/antiunchek.json'))
const nsfw = JSON.parse(fs.readFileSync('./Z4/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./Z4/simi.json'))
const ban = JSON.parse(fs.readFileSync('./Z2/banned.json'))
const prem = JSON.parse(fs.readFileSync('./Z2/premium.json'))
const _user = JSON.parse(fs.readFileSync('./Z2/user.json'))
const _registered = JSON.parse(fs.readFileSync('./Z2/registered.json'))
const setting = JSON.parse(fs.readFileSync('./Z4/settings.json'))
let _scommand = JSON.parse(fs.readFileSync("./Z2/scommand.json"));
//prefix = '.'
blocked = []
owner = setting.ownerNumber
lolkey = 'SAYULONTEH'
indoapi = 'Fxc7' //GW KASIH UNLIMITED
rakukey = 'RakuKeyTod' //KEKNYA UNLIMITED
dapukey = 'wf2tghNhfU' //3000 LIMIT
botxyz = 'Aprii' //GW KASIH UNLIMITED
hardikey = 'hardianto' //UNLIMITED
vinkoapi = 'rxking' //UNLIMITED
n = '\n' // JANGAN DI APA APAIN
ogatakey = 'KFrfhVC4' // 3000 limit
apisenku = 'SenkuApi' //UNLIMITED
namabot = setting.namabot
namaowner = setting.ownerName
fake = setting.fake
ownerName = 'Alif Ananta'
ownerNumber = '6285890617231'
aktor = 'Alif Ananta' //JAN DI UBAH NANTI ERROR!!
Ramdani = '```'
let hit_today = []; //JAN UBAH
const BarBarKey = 'BarBarKey'
apixteam = 'bb3f4daecfeb0cf0' // APIKEY XTEAM REGIST AJA BIAR GA CEPET HABIS
const TobzKey = 'BotWeA'
const TechApi = '5BNIDH-1T0kPj-gWqG6q-sHtuHA-AWBSgZ'
const zeksapi = 'ApiBotIndo' //3000 LIMIT
const shizukaapi = 'itsmeiky633'
const apivhtear = 'alpinbotwa'
const thumb = fs.readFileSync("./Z4/logo_1.jpg");

 const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _user.push(obj)
            fs.writeFileSync('./Z2/user.json', JSON.stringify(_user))
        }
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
const cekUser = (sender) => {
let status = false
Object.keys(_user).forEach((i) => {
if (_user[i].id === sender) {
status = true
}
})
return status
}

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/// By Ramdani Official 
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = 'GoodNigh🌌'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = 'GooodEvening🌆'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = 'GoodEvening🌇'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = 'GoodAfternoon🏞'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = 'GoodMoorning🌅'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = 'GoodNight🏙'
}
async function starts() {
	const Ramdani = new WAConnection()
	Ramdani.version = [2, 2143, 6]
	Ramdani.logger.level = 'warn'
	console.log(banner.string)
	Ramdani.on('qr', () => {
		Ramdani.sendMessage("6285890617231@s.whatsapp.net", `「 BOT CONNECT 」\n\n${Ramdani}Hallo Kak!! Saya ${ownerName} Izin Menggunakan Bot Ini!!${Ramdani}\n\n${Ramdani}BOT TERSAMBUNG PADA${Ramdani}\n${Ramdani}${time2}${Ramdani}\n\n${Ramdani}PROFILE${Ramdani}\n*Nama* : ${ownerName}\n*Nomor* : ${ownerNumber}\n*Status* : Online\n\n${Ramdani}TERIMAKASIH KAK Ramdani!!${Ramdani}`, MessageType.extendedText)
		console.log(color('[','white'), color('!','cyan'), color(']','white'), color('Scan Ya Kak, Expried Dalam 20 Detik'))
	})

	fs.existsSync('./Ramdani.json') && Ramdani.loadAuthInfo('./Ramdani.json')
	Ramdani.on('connecting', () => {
		start('2', 'Menyambungkan')
	})
	fs.existsSync('./Ramdani.json') && Ramdani.loadAuthInfo('./Ramdani.json')
    Ramdani.on('connecting', () => {
    start('2','')
    })
    Ramdani.on('open', () => {
    success('2', 'Dah Connect Tuhh!!')
    start('2','')
	})
	await Ramdani.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Ramdani.json', JSON.stringify(Ramdani.base64EncodedAuthInfo(), null, '\t'))
        
	
	Ramdani.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			Ramdani.sendMessage(call, 'Maaf, saya tidak bisa menerima panggilan. nelfon = block!.\nJika ingin membuka block harap chat Owner!!', MessageType.text)
			.then(() => Ramdani.blockUser(call, "add"))
			}, 100);
		})
		
		Ramdani.on("group-participants-update", async (anu) => {
    try {
      groupMet = await Ramdani.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await Ramdani.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await Ramdani.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(Ramdani.user.jid)) {
        Ramdani.sendMessage(anu.jid, "Haii", "conversation");
      }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(Ramdani.user.jid)) {
             const mdata = await Ramdani.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await Ramdani.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await Ramdani.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = Ramdani.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                teks = `*Haii* @${num.split('@')[0]} 👋\n💌 *Bɪᴏ* : *${thu.status}*\n🌼 *Mᴇᴍʙᴇʀs : ${memeg}*\n🌺 *Wᴇʟᴄᴏᴍᴇ Tᴏ* \n *${mdata.subject}*\n*Subscribe My Channel*\n*https:https://www.youtube.com/channel/UCt8L2Ar8t4UmETR-rjWIE2A*\n✨ *Dᴏɴᴛ Fᴏʀɢᴇᴛ Dɪsᴄʀɪᴘᴛɪᴏɴ* \n *${mdata.desc}*\n ${time_wel} -  ${time_welc}`
                welcomeBut = [{buttonId:`#menu`,buttonText:{displayText:'MENU'},type:1}, {buttonId:`bebantot`,buttonText:{displayText:'BEBAN TOD:V'},type:1}]
                welcomeButt = { contentText: ` `, footerText: `${teks}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                Ramdani.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(Ramdani.user.jid)) {
                const mdata = await Ramdani.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const bosco3 = await Ramdani.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
                let w = Ramdani.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `*Sayonara Bʀᴏᴛʜᴇʀ* 👋\n@${num.split('@')[0]}\n *Leaving From* : *${mdata.subject}*\n *Rᴇsᴛ Nᴏᴡ Pᴇᴀᴄᴇ* \n${time_wel} -  ${time_welc}`
                goodbyeBut = [{buttonId:`#`,buttonText:{displayText:'KALO BALIK LAGI BAWA GORENGAN TOD  LAPER GW:V'},type:1}, {buttonId:`berkat`,buttonText:{displayText:'ASIK MALEM TAHLILAN 🗿'},type:1}]
                goodbyeButt = { contentText: ` `, footerText: `${out}`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
                Ramdani.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                  }
        } catch (e) {
            console.log('Error :', e)
        }
    })

	Ramdani.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};  

	Ramdani.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = BarBarKey// contact me on whatsapp wa.me/6289512545999
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			var prefixRegEx = /^[!&z?=#.+\/]/gi;
    let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
    let prefix = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)[0] : "";
    body =
      type === "conversation" && mek.message.conversation.startsWith(prefix)
        ? mek.message.conversation
        : type == "imageMessage" &&
          mek.message.imageMessage.caption.startsWith(prefix)
        ? mek.message.imageMessage.caption
        : type == "videoMessage" &&
          mek.message.videoMessage.caption.startsWith(prefix)
        ? mek.message.videoMessage.caption
        : type == "locationMessage" &&
          mek.message.locationMessage.caption.startsWith(prefix)
        ? mek.message.locationMessage
        : type == "extendedTextMessage" &&
          mek.message.extendedTextMessage.text.startsWith(prefix)
        ? mek.message.extendedTextMessage.text
        : "";
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    let chats = _chats.match(prefixRegEx)
      ? _chats
          .split(prefixRegEx)
          .find((v) => v === _chats.replace(prefixRegEx, ""))
      : _chats;
      
      
 let command = chats.split(/ +/g)[0];
    hit_today.push(command);
    const args = _chats.trim().split(/ +/).slice(1);
    const commander = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const arg = budy.slice(commander.length + 2, budy.length)
    const isCmd = _chats.match(prefixRegEx)
      ? prefixRegEx.exec(_chats)["input"]
      : _chats;
    const q = args.join(" ");

			mess = {
				daftar: `─ 「 *NOT REGISTERED* 」 ─\n\n_*ANDA BELUM TERDAFTAR DI DATABASE BOT KETIK ${prefix}verify UNTUK DAFTAR*_`,
				wait: 'Mohon tunggu sebentar ya kakak',
				banned: 'maaf kamu sudah terbanned hubungi owner untuk membuka ban',
				success: 'Nih kak jangan luh subs https:https://www.youtube.com/channel/UCt8L2Ar8t4UmETR-rjWIE2A',
				error: {
					api : 'Maaf Terjadi Kesalahan Kak',
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					v: 'Link tidak valid'
				},
				only: {
					prem: 'Hanya Untuk User Premium',
					group: '❌ Perintah ini hanya bisa di gunakan dalam group! ❌',
					ownerG: '❌ Perintah ini hanya bisa di gunakan oleh owner group! ❌',
					ownerB: '❌ Perintah ini hanya bisa di gunakan oleh owner bot! ❌',
					admin: '❌ Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: '❌ Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌'
				}
			}
			const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const dfrply = fs.readFileSync('./Z4/logo_1.jpg')
        const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${namaowner}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./Z2/registered.json', JSON.stringify(_registered))
        }

			const botNumber = Ramdani.user.jid
			const ownerNumber = [`${owner}@s.whatsapp.net`]
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = Ramdani.contacts[sender] != undefined ? Ramdani.contacts[sender].vname || Ramdani.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await Ramdani.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBanned = ban.includes(sender)
			const isUser = cekUser(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
            const isAntilink = isGroup ? antilink.includes(from) : false
            const isAntiunchek = isGroup ? antiunchek.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
            const isOwner = ownerNumber.includes(sender)
            var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
			const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
			const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			async function uptotele(path){
            let form = new FormData();
            form.append('photo', fs.createReadStream(path))
            let data = await Axios({ method: "POST", url: "https://telegra.ph/upload",data: form, headers: { 'Content-Type': `multipart/form-data; boundary=${form._boundary}`}})
            return 'https://telegra.ph' + data.data[0].src
         }
        async function uptoibb(path){
            return new Promise (async (resolve, reject) => {
            imgbb('91904762b2cd230ce1d861279bd6bf1d', path).then((res) =>{
            resolve(res.url)
		        	}).catch(reject)
        	})
         }
        async function uptoaqulz(path) {
	        let form = new FormData();
            form.append('apikey', aqulzkey)
            form.append('fileToUpload', fs.createReadStream(path))
            let data = await Axios({ method: "POST", url: "https://justaqul.xyz/upload",data: form, headers: { 'Content-Type': `multipart/form-data; boundary=${form._boundary}`}})
            return data.data.result
        }
        async function sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0] + "Message"
            if (mime === "image/gif") {
                type = MessageType.video
                mime = Mimetype.gif
            }
            if (mime === "application/pdf") {
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if (mime.split("/")[0] === "audio") {
                mime = Mimetype.mp4Audio
            }
            return Ramdani.sendMessage(from, await getBuffer(url), type, { caption: caption, quoted: msg, mimetype: mime, contextInfo: { "mentionedJid": men ? men : [] } })
        }
        const textImg = (teks) => {
            return Ramdani.sendMessage(from, teks, text, { quoted: msg, thumbnail: fs.readFileSync(setting.pathImg) })
        }
        const sendList = (from, title, desc, footer, butt, list, msg, men) => {
            return this.sendMessage(from, {"title": title,"description": desc,"footerText":footer,"buttonText":butt,"listType": "SINGLE_SELECT","sections": list}, MessageType.listMessage, {quoted: msg, contextInfo: {"mentionedJid": men ? men : []}})
        }        
			const reply = (teks) => {
				Ramdani.sendMessage(from, teks, text, {quoted:mek})
			}
			Ramdani.createMessage = async (jidnya, kontennya, optionnya) => {
            return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: Ramdani.authState.creds.me.id,upload: Ramdani.waUploadToServer})
            }
			function parseMention(text = '') {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
			        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Ramdani.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Ramdani.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
			const sendMess = (hehe, teks) => {
				Ramdani.sendMessage(hehe, teks, text)
			}
			const adRamdaniremuser = (userid, sender, time, serials) => {
	        const obj = { id: userid, name: sender, time: time, serial: serials }
	        _Elite.push(obj)
          	fs.writeFileSync('./Z2/premium.json', JSON.stringify(_Elite))
            }	
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Ramdani.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Ramdani.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
		  if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntilink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
				setTimeout(() => {
				Ramdani.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			    }
			
			//buat fakereply
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}âœ¨`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}âœ¨`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}âœ¨`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}âœ¨`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}âœ¨`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}âœ¨`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}âœ¨`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}âœ¨`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}ðŸ”¥`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}ðŸ”¥`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}ðŸ”¥`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}ðŸ”¥`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}ðŸŒ¹`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}ðŸŒ¹`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}ðŸŒ¹`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}ðŸŒ›`; break;
            }
            var ucapanFakereply = '' + waktoonyabro;
            
			const ftoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./Z4/fake.jpg') }, 'title': `${ucapanFakereply}`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
			 let fakeYutub = {
             "title": `Hai Kak ${pushname}`,
             "body": `${jam}`,
             "mediaType": 2,
             "previewType": 2,
             "thumbnail": fs.readFileSync('./Z4/fake.jpg'),
             "mediaUrl": "https://www.youtube.com/channel/UCt8L2Ar8t4UmETR-rjWIE2A"
        }
			const fakeitem = (teks) => {
           Ramdani.sendMessage(from, teks, text, {
                   quoted: {
                           key:{
                 	       fromMe:false,
                           participant:`0@s.whatsapp.net`, ...(from ? {
                           remoteJid :"6289512545999-1604595598@g.us" }: {})
                           },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(".src/fake.jpg"),"itemCount":9999999999,"status":"INQUIRY","surface":"CATALOG","message": `© Creator By Alif Ananta`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},
                           contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}
                           
//button
const sendButton5 = async (id, text1, desc1, yo) => {
//© Crator by Ramdani Official
var buatpesan = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "urlButton": {
              "displayText": "situs-web🌍",
              "url": ""
            }
          },
          {
            "urlButton": {
              "displayText": "Youtube",
              "url": "https://www.youtube.com/channel/UCt8L2Ar8t4UmETR-rjWIE2A"
            }
          },
          {
            "quickReplyButton": {
              "displayText": "ᴀʟʟᴍᴇɴᴜ",
              "id": `${prefix}allmenu`
            }
          },
          {
            "quickReplyButton": {
              "displayText": "ᴅᴏɴᴀsɪ",
              "id": `${prefix}donasi`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "ᴏᴡɴᴇʀ",
              "id": `${prefix}owner`
            }
          }
        ]
      }
    }
  }, {})
Ramdani.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}

const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await Ramdani.prepareMessage(from, kma, image);
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      Ramdani.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButVideo = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await Ramdani.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      Ramdani.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    //button lokasi
const sendButloc = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Ramdani.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Ramdani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Ramdani.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
			if (budy == 'Ramdani') {

                reply(`Ya, Ada Yang Bisa Saya Bantu? Kalo Bingung Ketik ${prefix}menu Ya Kak`)

            }

            if (budy == 'p') {

                reply(`Ya, Ada Yang Bisa Saya Bantu? Kalo Bingung Ketik ${prefix}menu Ya Kak`)

            }

            if (budy == 'Bot') {

                reply(`Ya, Emng Gw bot ngapa? mau ngajak by one lu??`)

            }

            if (budy == 'bot') {
                reply(`Ya, Emng Gw bot ngapa? mau ngajak by one lu😒`)

            }


            if (budy == 'assalamualaikum') {

				reply(` وَعَلَيْكُمُ السَّلاَمُ \nAda Yang Bisa Saya Bantu? kalo Bingung Ketik ${prefix}menu Ya Kak`)

			}
			
			if (budy == 'mastah') {

				reply(`Waw Ada Mastah Ampun Mastah`)

			}
			
			if (budy == 'Mastah') {

				reply(`Waw Ada Mastah Ampun Mastah`)

			}

			if (budy == 'Assalamualaikum') {

				reply(`Waalaikumsalam, Ada Yang Bisa Saya Bantu? kalo Bingung Ketik ${prefix}menu Ya Kak`)

			}

			if (budy == 'Terimakasih') {

				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)

			}

			if (budy == 'terimakasih') {

				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)

			}

			if (budy == 'makasih') {

				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)

			}

			if (budy == 'Thanks') {

				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)

			}

			if (budy == 'thanks') {

				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)

			}

			if (budy == 'Tq') {

				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)

			}

			if (budy == 'tq') {

				reply(`Sama sama, Semoga Harimu Menyenangkan :)`)

			}
			/******************************* AUTO *******************************/
function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }        
let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);
      await Ramdani.setStatus(`Aktif selama ${uptime} | spam/vc/telfon?block | Sewa Bot Only |Subscribe Alif Ananta🗿`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
			
			colors = ['red','white','black','blue','yellow','green']
			const isImage = (type === 'imageMessage')
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = Ramdani.contacts[from] != undefined ? Ramdani.contacts[from].vname || Ramdani.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Ramdani'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./Z4/stickers/${name}.exif`)) return `./Z4/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	
				
				Ramdani.chatRead(from, "read")

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./Z4/stickers/${name}.exif`, buffer, (err) => {	
					return `./Z4/stickers/${name}.exif`	
				})	

			}
			switch(command) {
				
				case 'verify':
				const seriTod = bikinSerial(20)
				try {
				ppimg = await Ramdani.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				imglu = 'https://mekpa-result.herokuapp.com/bgverify.jpeg' //ubah sesuka kamu, bisa upload di imgbb.com
				veri = sender
				fs.writeFileSync('./Z2/user.json', JSON.stringify(_user))
				jadiUser(sender, seriTod)
				const kentod = 
`
--------- PENDAFTARAN USER ----------
•‚Pendaftaran Berhasil Dengan
•‚SN: ${seriTod}
•‚Pada ${Tanggal}
•,Jam ${jam}
•,Nama: ${pushname}
•,Nomor: ${sender.split('@')[0]}
•‚Untuk Menggunakan Bot
•‚Silahkan Kirim ${prefix}menu
`
                let buff = await getBuffer(`${ppimg}`)
                Ramdani.sendMessage(from, buff, MessageType.image, {quoted: mek, caption: kentod, contextInfo: {'mentionedJid': [sender]}})
                break
				
				case "menu":
				case "help":
				case "m":
				case "h":
				case "f":

  if (isBanned) return reply(mess.ban)

					 var arasyagans =`*_Hallo Kak ${pushname} 👋 ${ucapanWaktu}_*

Call / VC Bot = Self/Block
Spam Bot = Ban + Block

*Group Support*💬
• *https://chat.whatsapp.com/HbEeO3RlUosIYNX91xFhY2*
• *https://chat.whatsapp.com/HbEeO3RlUosIYNX91xFhY2*
• *https://chat.whatsapp.com/HbEeO3RlUosIYNX91xFhY2*

*Support Me*❤️
• *https://www.youtube.com/channel/UCt8L2Ar8t4UmETR-rjWIE2A*


*Rest Api*
• *https://ramdaniofficial-api.herokuapp.com*
• *https://kahfz-api.herokuapp.com*
• *https://dapuhy.xyz/*
• *https://api.zacros.my.id/*
• *https://bx-hunter.herokuapp.com/*
• *https://api-alphabot.herokuapp.com/*
• *http://hardianto.xyz/*
• *https://api.zeks.me/*
• *https://nathan-web.xyz*
• *https://killuaapi89.herokuapp.com/*
• *https://api-alya.herokuapp.com/*
• *https://apidhani.herokuapp.com/*


*Web*
• *Xnxx.com*
• *4evorproxy.com*

*Sosial Media Creator* 
• *Website : belom ada om*
• *Github : https://github.com/AlifAnanta*
• *WhatsApp  : http://wa.me/6285890617231*
• *Youtube : https://www.youtube.com/channel/UCt8L2Ar8t4UmETR-rjWIE2A*
• *Facebook : https://www.facebook.com/profile.php?id=100055274594084*
• *Instagram : https://www.instagram.com/alifananta5*



*Thanks to*
• *Allah swt.*
• *Nabi Muhammad saw.*
• *Creator bot*
• *Developer WhatsApp*
• *Alif Ananta (cupuuuuuu)*
• *KahfzXzy (mastah)*
• *Siegrin (mastah)*
• *Kurr bot (mastah)*
• *Mhankbarbar (big mastah)*
• *Lexxy official*
• *Herman chanel*
• *Yanz bot*
• *All creator bot*
`

					sendButImage(from, arasyagans, "jika button error silahkan ketik .allmenu untuk menampilkan menu\n© Creator by Alif Ananta", thumb, [

          {

            buttonId: `${prefix}allmenu`,

            buttonText: {

              displayText: `ALLMENU`,

            },

            type: 1,

          },

          {

            buttonId: `${prefix}donasi`,

            buttonText: {

              displayText: `DONASI`

            },

            type: 1,

          },

 ]);

 break
case 'allmenu':
var menu = `*_Hallo Kak ${pushname} 👋 ${ucapanWaktu}_*

╭─⬣「 *SIMPEL MENU* 」⬣
│❒ *${prefix}info*
│❒ *${prefix}topup*
│❒ *${prefix}joki*
│❒ *${prefix}donasi*
│❒ *${prefix}sewabot*
│❒ *${prefix}owner*
│❒ *${prefix}creator*
│❒ *${prefix}request*
│❒ *${prefix}rules*
│❒ *${prefix}iklan*
│❒ *${prefix}bingungcok*
╰───────────────────────╯
╭─⬣「 *MAKER MENU* 」⬣
│❒ *${prefix}tahta [text]*
│❒ *${prefix}text3d [text]*
│❒ *${prefix}pornhub [text&text]*
│❒ *${prefix}glitch [text&text]*
│❒ *${prefix}glitch2 [text&text]*
│❒ *${prefix}glitch3 [text]*
│❒ *${prefix}text3d2 [text]*
│❒ *${prefix}neon [text]*
│❒ *${prefix}pubg [text]*
│❒ *${prefix}blackpink [text]*
│❒ *${prefix}golRamdanilaybutton [text]*
│❒ *${prefix}wolflogo [text]*
│❒ *${prefix}dropwater [text]*
│❒ *${prefix}sandwrite [text]*
│❒ *${prefix}royaltext [text]*
│❒ *${prefix}logoepep [text]*
│❒ *${prefix}lighttext [text]*
│❒ *${prefix}candytext [text]*
│❒ *${prefix}butterflytext [text]*
│❒ *${prefix}silverplaybutton [text]*
│❒ *${prefix}summertext [text]*
│❒ *${prefix}coffetext [text]*
│❒ *${prefix}cslogo [text]*
│❒ *${prefix}lihttext [text]*
│❒ *${prefix}flowertext [text]*
│❒ *${prefix}leavest [text]*
│❒ *${prefix}matrix [text]*
│❒ *${prefix}narutobanner [text]*
│❒ *${prefix}underwater [text]*
│❒ *${prefix}papertext [text]*
│❒ *${prefix}furtext [text]*
│❒ *${prefix}woodtext [text]*
│❒ *${prefix}smoketext [text]*
│❒ *${prefix}snowtext [text]*
│❒ *${prefix}lavatext [text]*
│❒ *${prefix}multitext [text]*
│❒ *${prefix}shadowtext [text]*
│❒ *${prefix}lovetext [text]*
│❒ *${prefix}ninjalogo [text]*
│❒ *${prefix}ffserti [text]*
│❒ *${prefix}waifulogo [text]*
│❒ *${prefix}kanekilogo [text]*
│❒ *${prefix}lolilogo [text]*
│❒ *${prefix}dotalogo [text]*
│❒ *${prefix}sadlogo [text]*
│❒ *${prefix}remlogo [text]*
│❒ *${prefix}guralogo [text]*
╰───────────────────────╯
╭─⬣「 *STICKER MENU* 」⬣
│❒ *${prefix}ttp [text]*
│❒ *${prefix}attp [text]*
│❒ *${prefix}attp2 [text]*
│❒ *${prefix}attp3 [text]*
│❒ *${prefix}attp4 [text]*
│❒ *${prefix}temoji 🗿*
│❒ *${prefix}take*
│❒ *${prefix}stiker [foto/tag]*
│❒ *${prefix}sticker [video/foto]*
│❒ *${prefix}toimg [tag stiker]*
╰───────────────────────╯
╭─⬣「 *EDUKASI MENU* 」⬣
│❒ *${prefix}brainly*
│❒ *${prefix}nulis*
│❒ *${prefix}kisahnabi*
│❒ *${prefix}cerpen*
│❒ *${prefix}nulisbkanan*
│❒ *${prefix}nulispolio*
╰───────────────────────╯
╭─⬣「 *SEARCH MENU* 」⬣
│❒ *${prefix}pinterest [cari gambar]*
│❒ *${prefix}quotes*
│❒ *${prefix}artinama*
│❒ *${prefix}artimimpi*
│❒ *${prefix}nomorhoki*
│❒ *${prefix}shortlink*
│❒ *${prefix}bucin*
│❒ *${prefix}tts [kode bahsa]*
╰───────────────────────╯
╭─⬣「 *GROUP MENU* 」⬣
│❒ *${prefix}welcome >1/0 <*
│❒ *${prefix}antilink >1/0 <*
│❒ *${prefix}leveling >1/0 <*
│❒ *${prefix}event >1/0 <*
│❒ *${prefix}simih >1/0 <*
│❒ *${prefix}grup >buka/tutup <*
│❒ *${prefix}add*
│❒ *${prefix}getpp @tag /group*
│❒ *${prefix}kick*
│❒ *${prefix}hedsot*
│❒ *${prefix}linkgrup*
│❒ *${prefix}promote*
│❒ *${prefix}ganteng*
│❒ *${prefix}cantik*
│❒ *${prefix}jadian*
│❒ *${prefix}hobby*
│❒ *${prefix}apakah*
│❒ *${prefix}kapankah*
│❒ *${prefix}truth*
│❒ *${prefix}ttc*
│❒ *${prefix}dare*
│❒ *${prefix}bisakah*
│❒ *${prefix}demote*
│❒ *${prefix}setname*
│❒ *${prefix}setdesc*
│❒ *${prefix}setpp*
│❒ *${prefix}leave*
│❒ *${prefix}tagall*
│❒ *${prefix}sangecek*
│❒ *${prefix}gantengcek*
│❒ *${prefix}cantikcek*
│❒ *${prefix}lesbicek*
│❒ *${prefix}ppcp*
│❒ *${prefix}gaycek*
│❒ *${prefix}listadmin*
│❒ *${prefix}level*
│❒ *${prefix}fitnah*
│❒ *${prefix}hidetag*
│❒ *${prefix}hidetag5*
╰──────────────────────╯
╭─⬣「 *ANIME MENU* 」⬣
│❒ *${prefix}anime*
│❒ *${prefix}animesaran2*
│❒ *${prefix}animesaran*
│❒ *${prefix}neko*
│❒ *${prefix}rimuru*
│❒ *${prefix}wibu*
│❒ *${prefix}loli*
│❒ *${prefix}waifu*
│❒ *${prefix}husbu*
│❒ *${prefix}killua*
│❒ *${prefix}kurama*
│❒ *${prefix}rimuru*
│❒ *${prefix}tsunade*
│❒ *${prefix}naruto*
│❒ *${prefix}sagiri*
│❒ *${prefix}minato*
│❒ *${prefix}sakura*
│❒ *${prefix}nezuko*
│❒ *${prefix}hinata*
│❒ *${prefix}ppcp*
│❒ *${prefix}kaneki*
│❒ *${prefix}miku*
│❒ *${prefix}shinobu*
│❒ *${prefix}jiraya*
│❒ *${prefix}akira*
│❒ *${prefix}kurumi*
│❒ *${prefix}madara*
│❒ *${prefix}mikasa*
│❒ *${prefix}eren*
│❒ *${prefix}miku*
│❒ *${prefix}animerem*
│❒ *${prefix}wallpaper*
╰─────────────────────╯
╭─⬣「 *DOWNLOAD MENU* 」⬣
│❒ *${prefix}play [judul no link]*
│❒ *${prefix}playmp3 [judul no link]*
│❒ *${prefix}playmp4 [judul no link]*
│❒ *${prefix}instafoto [link]*
│❒ *${prefix}instavideo [link]*
│❒ *${prefix}tiktod [link]*
│❒ *${prefix}ytmp4 [link]*
│❒ *${prefix}ytmp3 [link]*
│❒ *${prefix}ytsearch [judul]*
╰──────────────────────╯

╭─⬣「 *18+ MENU* 」⬣
│❒ *${prefix}cersex*
│❒ *${prefix}nekoh*
│❒ *${prefix}hentai*
│❒ *${prefix}bokep*
│❒ *${prefix}futanari*
│❒ *${prefix}yuri*
│❒ *${prefix}anal*
╰──────────────────────╯

╭─⬣「 *ASUPAN MENU* 」⬣
│❒ *${prefix}asupan >text<*
│❒ *${prefix}randomasupan*
│❒ *${prefix}asupanbokep [khusus premium]*
│❒ *${prefix}blom ada*
│❒ *${prefix}blom ada*
│❒ *${prefix}blom ada*
╰──────────────────────╯

╭─⬣「 *SOUND MENU* 」⬣
│❒ *${prefix}sound*
│❒ *${prefix}sound >SOUND MENU 1 SAMPAI 60<*
│❒ *${prefix}arrahman*
│❒ *${prefix}sholawat*
│❒ *${prefix}araara*
│❒ *${prefix}baka*
│❒ *${prefix}susu*
│❒ *${prefix}home*
│❒ *${prefix}ngaji*
│❒ *${prefix}ngaji2*
│❒ *${prefix}tilawah*
│❒ *${prefix}yasin*
│❒ *${prefix}ayatkursi2*
│❒ *${prefix}playdate*
│❒ *${prefix}iri*
│❒ *${prefix}pale*
│❒ *${prefix}beautiful*
│❒ *${prefix}menyukaiku*
│❒ *${prefix}hallo*
│❒ *${prefix}magic*
│❒ *${prefix}loosinggame*
│❒ *${prefix}loosinginterest*
│❒ *${prefix}yourskin*
│❒ *${prefix}cutmeoff*
│❒ *${prefix}up*
│❒ *${prefix}wanna*
│❒ *${prefix}sowell*
│❒ *${prefix}lucas*
│❒ *${prefix}allnight*
│❒ *${prefix}aeshtetic*
│❒ *${prefix}aeshtetic2*
│❒ *${prefix}aeshtetic3*
│❒ *${prefix}aeshtetic4*
│❒ *${prefix}sad*
│❒ *${prefix}sad2*
│❒ *${prefix}sad3*
│❒ *${prefix}sad4*
│❒ *${prefix}gettinggold*
│❒ *${prefix}beb*
╰──────────────────────╯

╭─⬣「 *OWNER MENU* 」⬣
│❒ *${prefix}bc*
│❒ *${prefix}buggc*
│❒ *${prefix}clearall*
│❒ *${prefix}hacked*
│❒ *${prefix}block*
│❒ *${prefix}unblock*
│❒ *${prefix}clone*
│❒ *${prefix}setppbot*
│❒ *${prefix}setreply*
│❒ *${prefix}addprem*
│❒ *${prefix}delprem*
│❒ *${prefix}ban*
│❒ *${prefix}unban*
│❒ *${prefix}bcimg*
╰───────────────────────╯`
var imgs = await Ramdani.prepareMessage('0@c.us', thumb, image, { thumbnail: thumb })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await Ramdani.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `*_PILIH DISINI KAK_*`,
                        "description": menu,
                        "footerText": `© Creator by Alif Ananta`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "26262626262626",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "1000",
                        "retailerId": `${Tanggal}\n${ucapanFakereply}`,
                        "url": "https://ramdaniofficial.blogspot.com/?m=1"
                    },
                    "businessOwnerJid": "6285890617231@s.whatsapp.net",
                }
            }, { quoted: mek, mimetype: 'image/jpeg' })
            Ramdani.relayWAMessage(ctlg)
            break
            //CASE NYAAAA OM
            case "jadi bot":
            case "jadibot":
            case "jadi bot wa":
            case "jadibotwa":

  if (isBanned) return reply(mess.ban)

					 var arasyagans =`*_Hallo Kak ${pushname} 👋 ${ucapanWaktu}_*

*JIKA INGIN MENJADI BOT SILAHKAN KUNJUNGI CHANNEL YOUTUBE RAMDANI OFC*
• *https://www.youtube.com/channel/UCt8L2Ar8t4UmETR-rjWIE2A*
`

					sendButImage(from, arasyagans, "Jangan lupa donasi\n© Creator by Alif Ananta", thumb, [

          {

            buttonId: `${prefix}donasi`,

            buttonText: {

              displayText: `DONASI`,

            },

            type: 1,

          },

          {

            buttonId: `${prefix}creator`,

            buttonText: {

              displayText: `AUTHOR`

            },

            type: 1,

          },

 ]);

 break
            case 'grup bot':
            case 'grupbot':
            case 'group bot':
            case 'groupbot':
            case 'gc bot':
            case 'gcbot':
            Ramdani.sendMessage(from, grupbot(prefix), text)
					break
                case 'bebantot':
                reply(`*JANGAN GITU LU*\n*SESAMA BEBAN HARUS SALING*\n*HINA*`)
                break
                case 'berkat':
                reply(`*ANJG CUMA MAU BERKAT NYA:V*`)
                break
                case 'donasi':
				case 'donate':
					Ramdani.sendMessage(from, donasi(prefix, namabot, namaowner), text)
					break
					case 'iklan':
					Ramdani.sendMessage(from, iklan(prefix, namabot, namaowner), text)
					break
					case 'rules':
					Ramdani.sendMessage(from, rules(prefix, namabot, namaowner), text)
					break
					case 'tnc':
					Ramdani.sendMessage(from, tnc(prefix, namabot, namaowner), text)
					break
				case 'bingungcok':
					Ramdani.sendMessage(from, cara(prefix, namabot, namaowner), text)
					break
                case 'bisakah':
                if (!isUser) return reply(mess.daftar)
				if (isBanned) return reply(mess.banned)
					bisakah = body.slice(1)
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky','Gak Bisa Ajg Aowkwowk','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break
				case 'kapankah':
				if (!isUser) return reply(mess.daftar)
				if (isBanned) return reply(mess.banned)
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break
           case 'apakah':
           if (!isUser) return reply(mess.daftar)
           if (isBanned) return reply(mess.banned)
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break
case 'jadian':
if (!isUser) return reply(mess.daftar)
				if (!isGroup) return reply(mess.only.group)
				    if (isBanned) return reply(mess.banned)
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break
// Siapa Disni Paling Ganteng
case 'ganteng':
if (!isUser) return reply(mess.daftar)
				if (!isGroup) return reply(mess.only.group)
			    if (isBanned) return reply(mess.banned)
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					break	
//SIAPA YANG PALING CANTIK 
case 'cantik':
if (!isUser) return reply(mess.daftar)
				if (!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.banned)
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					break
case 'semoji':
if (!isUser) return reply(mess.daftar)
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case 'fitnah':
if (!isUser) return reply(mess.daftar)
		if (isGroup) return reply(mess.only.group)
             if (isBanned) return reply(mess.banned)
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					Ramdani.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
case 'ppcp':
case 'ppcouple':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
anu = await fetchJson(`https://ziy.herokuapp.com/api/gacha/ppcouple2?apikey=xZiyy`)
buff1 = await getBuffer (anu.result.cowo_image)
Ramdani.sendMessage(from, buff1, image, {quoted: mek, caption: 'COWOK'})
buff2 =await getBuffer (anu.result.cewe_image)
Ramdani.sendMessage(from, buff2, image, {quoted: mek, caption: 'CEWEK'})
break
case 'tiktok':
case 'tiktod':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('```Invalid link```')
ttw = await getBuffer('https://telegra.ph/file/da6d7dedea14acae85385.jpg')
pnn =await Ramdani.prepareMessage(from, ttw, image)
tete = [
{buttonId: `${prefix}tiktokwm ${args.join(' ')}`, buttonText: {displayText: 'WM'}, type: 1},
{buttonId: `${prefix}tiktoknowm ${args.join(' ')}`, buttonText: {displayText: 'NOWM'}, type: 1},
{buttonId: `${prefix}tiktokmusic ${args.join(' ')}`, buttonText: {displayText: 'MUSIC'}, type: 1}
]
ttbut = {
imageMessage: pnn.message.imageMessage,
contentText: `Hai Kak ${pushname} Bot Telah Menmekatkan Title Tersebut , Silahkan Pilih Tombol Akses Di Bawah`,
footerText: `_*© Creator by Alif Ananta*_`,
buttons: tete,
headerType: 4
}
await Ramdani.sendMessage(from, ttbut, MessageType.buttonsMessage, {quoted:mek})
break
case 'tiktoknowm':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson (`https://api-aprilia-xyz.herokuapp.com/api/tiktok?url=${args.join(' ')}`)
buffer = await getBuffer (anu.result.nowm)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'SUBS Alif Ananta SU'})
break
case 'tiktokwm':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson (`https://api-aprilia-xyz.herokuapp.com/api/tiktok?url=${args.join(' ')}`)
buffer = await getBuffer (anu.result.original)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'SUBS Alif Ananta SU'})
break
/*
case 'tiktoknowm':
      if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_nowm?url=${args.join(' ')}`)
buffer = await getBuffer(anu.download)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
break
case 'tiktokwm':
      if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson (`https://docs-jojo.herokuapp.com/api/tiktok_wm?url=${args.join(' ')}`)
buffer = await getBuffer (anu.download)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
break
*/
case 'tiktokmusic':
if (!isUser) return reply(mess.daftar)
      if (isBanned) return reply (mess.banned)
reply(mess.wait)
anu = await fetchJson(`http://zekais-api.herokuapp.com/tiktokmusic?url=${args.join(' ')}&apikey=Rj9pGDhE`)
buffer = await getBuffer (anu.result)
Ramdani.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'shortlink':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
anu = await fetchJson (`https://api-aprilia.herokuapp.com/api/short/tiny?url=${args.join(' ')}&apikey=Alphabot`)
reply (anu.result.link)
break
case 'glitch2':
if (!isUser) return reply(mess.daftar)
			if (isBanned) return reply(mess.banned)
					var gh = body.slice(9)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Example: ${prefix + command} Bot&Indo`)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.dapuhy.ga/api/textpro/glitch2?text1=${gli}&text2=${tch}&apikey=${mekukey}`)
					Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break 
					case 'glitch3':
					if (!isUser) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
buffer = await getBuffer (`https://kuontol-api.herokuapp.com/api/textpro/impressive-glitch-effect?text=${args.join(' ')}`)
Ramdani.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
break
case 'instavideo':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
if (args.length < 1) return reply("```Mana linknya tot```")
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('```Invalid link```')
reply(mess.wait)
anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/igdownload?url=${args.join(' ')}&apikey=wf2tghNhfU`)
buffer = await getBuffer (anu.result.download_url)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: '*Subscribe channel Alif Ananta dan follow Instagram riyan_ff12*'})
break
case 'instafoto':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
if (args.length < 1) return reply("```Mana linknya tot```")
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('```Invalid link```')
reply(mess.wait)
anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/igdownload?url=${args.join(' ')}&apikey=wf2tghNhfU`)
buffer = await getBuffer (anu.result.download_url)
Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: '*Subscribe channel Alif Ananta dan follow Instagram riyan_ff12*'})
break
case 'playmp3':
if (!isUser) return reply(mess.daftar)
      if (isBanned) return reply (mess.banned)
      if (args.length < 1) return reply("```JUDUL MANA TOT```")
      anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytplaymp3?query=${args.join(' ')}&apikey=wf2tghNhfU`)
      reply(mess.wait)
      captionnya = `TITLE BERHASIL DImekATKAN\n\nJudul : ${anu.result.title}\nKualitas Video : ${anu.result.quality}\nViews : ${anu.result.views}\nSize : ${anu.result.size}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM AUDIO*`
buffer = await getBuffer (anu.result.thumb)
Ramdani.sendMessage(from, buff, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Ramdani.sendMessage(from, miku, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'playmp4':
if (!isUser) return reply(mess.daftar)
      if (isBanned) return reply (mess.banned)
      if (args.length < 1) return reply("```JUDUL MANA TOT```")
      anu = await fetchJson(`https://api.dapuhy.ga/api/socialmedia/ytplaymp4?query=${args.join(' ')}&apikey=wf2tghNhfU`)
      reply(mess.wait)
      captionnya = `TITLE BERHASIL DImekATKAN\n\nJudul : ${anu.result.title}\nKualitas Video : ${anu.result.quality}\nViews : ${anu.result.views}\nSize : ${anu.result.size}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM VIDEO*`
buffer = await getBuffer (anu.result.thumb)
Ramdani.sendMessage(from, buff, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Ramdani.sendMessage(from, miku, audio, {mimetype: 'audio/mp4', quoted: mek})
break
  case 'shadowtext':
  if (!isUser) return reply(mess.daftar)
  if (isBanned) return reply (mess.banned)
  if (args.length == 0) return reply(`Example: ${prefix + command} Alif Ananta`)
  txt = args.join(" ")
  reply(mess.wait)
  buffer = await getBuffer(`https://ogata-api.herokuapp.com/api/oxy/shadow?text=${txt}&apikey=${ogatakey}`)
  Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption:mess.success})
  break
case 'ytmp3':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
if (args.length < 1) return reply("```LINK NYA?```")
if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply('```LINK NYA JELEK NIH```')
reply (mess.wait)
anu = await fetchJson (`https://api.dapuhy.ga/api/socialmedia/ytmp3?url=${args.join(' ')}&apikey=wf2tghNhfU`)
captionnya = `TITLE BERHASIL DImekATKAN\n\nJudul : ${anu.result.title}\nSize : ${anu.result.size}\nLike Video: ${anu.result.likes}\nViews : ${anu.result.views}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM AUDIO*`
buffer = await getBuffer (anu.result.thumb)
Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Ramdani.sendMessage(from, miku, audio, {mimetype: 'audio/mp4', quoted: mek})
break
case 'ytmp4':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply (mess.banned)
if (args.length < 1) return reply("```LINK NYA?```")
if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply('```LINK NYA JELEK NIH```')
reply (mess.wait)
anu = await fetchJson (`https://api.dapuhy.ga/api/socialmedia/ytmp4?url=${args.join(' ')}&apikey=wf2tghNhfU`)
captionnya = `TITLE BERHASIL DImekATKAN\n\nJudul : ${anu.result.title}\nSize : ${anu.result.size}\nKualitas Video : ${anu.result.quality}\nViews : ${anu.result.views}\nChannel : ${anu.result.channel}\nDeskripsi : ${anu.result.desc}\n\n*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM VIDEO*`
buffer = await getBuffer (anu.result.thumb)
Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: captionnya})
miku = await getBuffer (anu.result.url)
Ramdani.sendMessage(from, miku, video, {mimetype: 'video/mp4', quoted: mek})
break
case 'ktp':
if (isBanned) return reply (mess.banned)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nContoh: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|Akira|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=SAYULONTEH&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    Ramdani.sendMessage(from, ini_anu, image, {quoted: mek, caption: 'Noh Jadi'})
                    break
// Note jangan Salah Gunain
case 'buggc':
if (!isOwner) return reply(mess.only.ownerB)
if (!isOwner) return reply(mess.only.ownerB)
await Ramdani.toggleDisappearingMessages(from)
reply("mampus")
break
case 'hacked':
              if (!isOwner) return reply(mess.only.ownerB)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://telegra.ph/file/42bbb3c9962702d314008.jpg`)
                   Ramdani.updateProfilePicture (from, tessgc)
                Ramdani.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                Ramdani.groupUpdateDescription(from, `_Owner telah meretas grup ini_`)             
                Ramdani.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
					break
// Fitur Join Grup Whatsapp
case 'join':  case 'joingc':
   if (!q) return reply('Linknya?')
   if (isOwner) {
   if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Kak')
   reply('Please waitt...')
   link = args[0].replace('https://chat.whatsapp.com/','')
   fak = Ramdani.query({ json: ['action', 'invite', link],
   expect200: true })
   reply('Berhasil Masuk Grup')
   } else {
   const buttons = [{buttonId: `${prefix}sewabot`, buttonText: {displayText: 'SEWA'}, type: 1}]
   const buttonMessage = {
   headerType: "IMAGE",
   contentText: `Hai Kak, Fitur Ini Hanya Bisa Di Gunakan Oleh Owner`,
   footerText: 'ingin sewa? klik di bawah',
   buttons: buttons,
   headerType: 1
   }
   await Ramdani.sendMessage(from, buttonMessage, MessageType.buttonsMessage)
   }
   break
				case 'rate':
				if (!isUser) return reply(mess.daftar)
				if (isBanned) return reply(mess.banned)
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
           case 'hobby':
           if (!isUser) return reply(mess.daftar)
           if (isBanned) return reply(mess.banned)
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break
           case 'seberapagay':
           if (!isUser) return reply(mess.daftar)
           if (isBanned) return reply(mess.banned)
					gay = body.slice(13)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Nih Liat Data Gay Si ${gay}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   reply(hasil)
					break
           case 'cersex':
           if (!isUser) return reply(mess.daftar)
					if (isBanned) return reply(mess.banned)
					gatauda = body.slice(1)
					anu = await fetchJson(`https://api-senku.herokuapp.com/api/cersex?apikey=${apisenku}`)
					reply(anu.result)
					break
        case 'quotes':
        if (isBanned) return reply (mess.banned)
        anu = await fetchJson(`https://melcanz.net/api/quotes?apikey=daff`)
        reply (anu.quotes)
        break
                case 'cerpen':
                if(isBanned) return reply (mess.banned)
                gatauda = body.slice(1)
                anu = await fetchJson(`https://api-senku.herokuapp.com/api/cerpen?apikey=${apisenku}`)
                reply(anu.result.ceritanya)
                break
               case 'artinama':
               if (isBanned) return reply (mess.banned)
               if (args.length == 0) return reply(`Example: ${prefix + command} apri`)
               anu = await fetchJson(`https://melcanz.net/api/artinama?nama=${args.join(' ')}&apikey=daff`)
               reply(anu.result)
               break
               case 'artimimpi':
               if (isBanned) return reply (mess.banned)
               if (args.length == 0) return reply(`Example: ${prefix + command} apri`)
               anu = await fetchJson(`https://melcanz.net/api/artimimpi?mimpi=${args.join(' ')}&apikey=daff`)
               reply(anu.result)
               break
               case 'kisahnabi':
               if (isBanned) return reply (mess.banned)
               if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
               anu = await fetchJson(`https://raku-web.herokuapp.com/api/muslim/kisahnabi?nabi=${args.join(' ')}&apikey=${rakukey}`)
               anu1 = `*NAMA NABI* : ${anu.result.name}\n`
               anu1 += `*KELAHIRAN* : ${anu.result.kelahiran}\n`
               anu1 += `*WAFAT USIA* : ${anu.result.wafat_usia}\n` 
               anu1 += `*KISAH* : ${anu.result.kisah}\n`
               reply(anu1)
               break
                case 'truth':
                if (isBanned) return reply(mess.banned)
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu mekatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah dimeket apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					Ramdani.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
                case 'adRamdanirem':  
					   if (!isOwner) return reply(mess.only.ownerB)
					aRamdanirem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(aRamdanirem)
					fs.writeFileSync('./Z2/premium.json', JSON.stringify(prem))
					reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
					break				
		case 'dellprem':  
					   if (!isOwner) return reply(mess.only.ownerB)
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./Z2/premium.json', JSON.stringify(prem))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
					break
                case 'dare':
                if (isBanned) return reply(mess.banned)
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot 🤥 setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u APRI?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					Ramdani.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break
                case 'hidetag':
                  if (isBanned) return reply(mess.banned)                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await Ramdani.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					Ramdani.sendMessage(from, options, text)
					break
                  case 'ffserti':
                  if (isBanned) return reply (mess.banned)
                  if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                  reply(mess.wait)
                  anu = await fetchJson(`https://raku-web.herokuapp.com/api/serti/sertiepep?apikey=${rakukey}&text=${args.join(' ')}`)
                  buffer = await getBuffer (anu.result.results)
                  Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: '*SUBS Alif Ananta BRO*'})
                  break
                   case 'take':
                       if (isPrem) return reply(mess.only.prem)
                        if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						const pembawm = body.slice(6)
						if (!pembawm.includes('|')) return await reply(`Reply sticker dengan caption *${prefix}take nama|author*`)
						const encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const mediau = await Ramdani.downloadAndSaveMediaMessage(encmediau, `./sticker/${sender}`)
                         const packname = pembawm.split('|')[0]
						const author = pembawm.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./takestick_${sender}.exif ./${sender}.webp -o ./${sender}.webp`, async (error) => {
							if (error) return reply(ind.error.api)
							Ramdani.sendMessage(from, fs.readFileSync(`./${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./takestick_${sender}.exif`)
						})
						break  
					case 'group':
					apri = 'PILIH BEMRO'
        sendButMessage(from, apri, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
        ]);
        break
case "closegc": 
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
        Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
      case "opengc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
					case 'sangecek':
					 // Fix Bug By Sofyan AMV				
				if (isBanned) return reply(mess.banned)
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					break
                case 'gaycek':
					 // Fix Bug By Sofyan AMV				
				if (isBanned) return reply(mess.banned)
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					break
                case 'lesbicek':
					 // Fix Bug By Sofyan AMV				
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					break
                case 'gantengcek':
					 // Fix Bug By Sofyan AMV				
				if (isBanned) return reply(mess.banned)
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					break
		case 'cantikcek':
					 // Fix Bug By Sofyan AMV				
				if (isBanned) return reply(mess.banned)
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					Ramdani.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					break
				case 'info':
					me = Ramdani.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}`
					buffer = await getBuffer(`https://telegra.ph/file/da6d7dedea14acae85385.jpg`)
					Ramdani.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					Ramdani.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
            case 'dropwater':
            if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/dropwater?apikey=ApiBotIndo&text=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
           case 'text3d':
           if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/text3dbox?apikey=ApiBotIndo&text=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
            case 'text3d2':
            if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/text3d?apikey=ApiBotIndo&text=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
            case 'sandwrite':
            if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/sandw?apikey=ApiBotIndo&text=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
          case 'royaltext':
          if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.olabdev.my.id/api/oxy/royal?text=${txt}&apikey=hH2IYthq`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
          case 'remlogo':
          if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://melcanz.net/rem?text=${txt}&apikey=daff`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
           case 'guralogo':
           if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx5?apikey=hardianto&text=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
           case 'candytext':
           if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.olabdev.my.id/api/oxy/candy?text=${txt}&apikey=hH2IYthq`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
           case 'butterflytext':
           if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.olabdev.my.id/api/oxy/butterfly?text=${txt}&apikey=hH2IYthq`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
           case 'summertext':
           if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.olabdev.my.id/api/oxy/summer?text=${txt}&apikey=hH2IYthq`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
           case 'coffetext':
           if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.olabdev.my.id/api/oxy/coffee?text=${txt}&apikey=hH2IYthq`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
           case 'cslogo':
           if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} Bot | Indo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/cslogo?apikey=ApiBotIndo&text=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
           case 'nulis':
           if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} Bot | Indo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.dapuhy.ga/api/maker/nulis?text=${txt}&apikey=wf2tghNhfU`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
            case 'glitch':
            if (isBanned) return reply(mess.banned)
					var gh = body.slice(8)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Example: ${prefix + command} Bot&Indo`)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.me/api/gtext?apikey=ApiBotIndo&text1=${gli}&text2=${tch}`)
					Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break
           case 'lionlogo':
           if (isBanned) return reply(mess.banned)
					var gh = body.slice(10)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Example: ${prefix + command} Bot&Indo`)
					reply(mess.wait)
					buffer = await getBuffer(`https://ogata-api.herokuapp.com/api/textpro/lionlogo?text1=${gli}&text2=${tch}&apikey=KFrfhVC4`)
					Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break 
			case 'ninjalogo':
			if (isBanned) return reply(mess.banned)
					var gh = body.slice(11)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Example: ${prefix + command} Bot&Indo`)
					reply(mess.wait)
					buffer = await getBuffer(`https://ogata-api.herokuapp.com/api/textpro/ninjalogo?text1=${gli}&text2=${tch}&apikey=KFrfhVC4`)
					Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break
            case 'wolflogo':
            if (isBanned) return reply(mess.banned)
					var gh = body.slice(10)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Example: ${prefix + command}Bot&Indo`)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.me/api/wolflogo?apikey=ApiBotIndo&text1=${gli}&text2=${tch}`)
					Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break
             case 'waifulogo':
             if (isBanned) return reply(mess.banned)
					var gh = body.slice(11)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Example: ${prefix + command}Bot&Indo`)
					reply(mess.wait)
					buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx4?apikey=hardianto&text1=${gli}&text2=${tch}`)
					Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break
             case 'sadlogo':
             if (isBanned) return reply(mess.banned)
					var gh = body.slice(9)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Example: ${prefix + command}Bot&Indo`)
					reply(mess.wait)
					buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx3?apikey=hardianto&text1=${gli}&text2=${tch}`)
					Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break
            case 'lighttext':
            if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/tlight?apikey=ApiBotIndo&text=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
          case 'kanekilogo':
   if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx1?apikey=hardianto&nama=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
           case 'lavatext':
           if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.dapuhy.ga/api/textpro/lava?text=${txt}&apikey=wf2tghNhfU`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
           case 'snowtext':
           if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.dapuhy.ga/api/textpro/snow?text=${txt}&apikey=wf2tghNhfU`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
           case 'lihttext':
             if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/lithgtext?apikey=ApiBotIndo&text=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
           case 'smoketext':
           if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/smoketext?apikey=ApiBotIndo&text=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
           case 'papertext':
           if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.olabdev.my.id/api/oxy/paper?text=${txt}&apikey=hH2IYthq`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
          case 'woodtext':
          if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.olabdev.my.id/api/oxy/wood?text=${txt}&apikey=hH2IYthq`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
           case 'underwater':
           if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.olabdev.my.id/api/oxy/underwater?text=${txt}&apikey=hH2IYthq`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
          case 'furtext':
          if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.olabdev.my.id/api/oxy/fur?text=${txt}&apikey=hH2IYthq`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
           case 'leavest':
             if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/leavest?apikey=ApiBotIndo&text=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
            case 'flowertext':
              if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/flowertext?apikey=ApiBotIndo&text=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
            case 'goldplaybutton':
            if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/gplaybutton?apikey=ApiBotIndo&text=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
                case 'silverplaybutton':
                if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                  buffer = await getBuffer(`https://api.zeks.me/api/splaybutton?apikey=ApiBotIndo&text=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
              case 'matrix':
               if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/matrix?apikey=ApiBotIndo&text=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
              case 'neon':
              if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/bneon?apikey=ApiBotIndo&text=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
              case 'lolilogo':
              if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx2?apikey=hardianto&nama=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
              case 'logoepep':
              if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/epep?apikey=ApiBotIndo&text=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
              case 'narutobanner':
              if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} BotIndo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.zeks.me/api/naruto?apikey=ApiBotIndo&text=${txt}`)
                    Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: mess.success})
                    break
case "storemenu":
case "topup":
case "game":

  if (isBanned) return reply(mess.ban)

					 var arasyagans =`Hallo kak *${pushname}* 👋
${ucapanWaktu}

Mau top up? silahkan pilih salah satu`

					sendButImage(from, arasyagans, "silahkan pilih di sini", thumb, [

          {

            buttonId: `${prefix}topupff`,

            buttonText: {

              displayText: `FREE FIRE`,

            },

            type: 1,

          },

          {

            buttonId: `${prefix}topupml`,

            buttonText: {

              displayText: `MOBILE LEGENDS`

            },

            type: 1,

          },

 ]);

 break
    case 'topupff':
             if (isBanned) return reply(mess.bannad)
             var wew = fs.readFileSync(`./Z4/FF.jpg`)
				var tres = `
*LIST DM*
5 💎 : 850❁
20💎 : 2.950❁
50💎 : 6.800❁
70💎 : 9.300❁
100💎 : 13.500❁
140💎 : 18.500❁
150💎 : 20.100❁
210💎 : 27.500❁
355?? : 45.600❁
500💎 : 64.500❁
720💎 : 91.100❁
1000💎 : 127.000❁
1075💎 : 127.700❁
1440💎 : 182.100❁
2000💎 : 247.500❁
MM : 28.000❁
MB : 110.200❁
Minat? chat admin`
    Ramdani.sendMessage(from, wew, image, { quoted: mek, caption: tres })
    break
case "topupml":
					// Fix Case by 𝗬𝗔𝗡𝗭 𝗕𝗢𝗧 
					sya = await getBuffer(`https://telegra.ph/file/26fabc783f4ce0b9339e4.jpg`)
					Ramdani.sendMessage(from, sya, image, { quoted: mek, caption: `MOBILE LEGENDS VIA ID 

86💎 19.600
172💎 39.200
257💎 58.800
344💎 78.400
430💎 98.100
516💎 117.800
602💎 137.400
706💎 156.800
878💎 196.000
963💎 215.600
1050💎 235.200

Starlight = 129.360
Twilight = 129.360
Starlight +  = 294.000` })
					break

          case "storemenu2":
            case "joki":
            case "game":
            
              if (isBanned) return reply(mess.ban)
            
                       var arasyagans =`Hallo kak *${pushname}* 👋
            ${ucapanWaktu}
            
            Mau joki? silahkan pilih salah satu`
            
                      sendButImage(from, arasyagans, "silahkan pilih di sini", thumb, [
            
                      {
            
                        buttonId: `${prefix}jokiff`,
            
                        buttonText: {
            
                          displayText: `FREE FIRE`,
            
                        },
            
                        type: 1,
            
                      },
            
                      {
            
                        buttonId: `${prefix}jokiml`,
            
                        buttonText: {
            
                          displayText: `MOBILE LEGENDS`
            
                        },
            
                        type: 1,
            
                      },
            
             ]);
            
             break
                case 'jokiff':
                         if (isBanned) return reply(mess.bannad)
                         var wew = fs.readFileSync(`./Z4/FF.jpg`)
                    var tres = `
            *belom bikin list*
            
            Minat? chat admin`
                Ramdani.sendMessage(from, wew, image, { quoted: mek, caption: tres })
                break
            case "jokiml":
                      // Fix Case by 𝗬𝗔𝗡𝗭 𝗕𝗢𝗧 
                      sya = await getBuffer(`https://telegra.ph/file/26fabc783f4ce0b9339e4.jpg`)
                      Ramdani.sendMessage(from, sya, image, { quoted: mek, caption: `MOBILE LEGENDS VIA ID 
            
                      *belom bikin list*
            
                      Minat? chat admin` })
                      break    
case 'sewabot':

  if (isBanned) return reply(mess.banned)

					 var arasyagans =`*_Hello Kak ${pushname} 👋 ${ucapanWaktu}_*

_Selamat datang di sewa bot BY Alif Ananta_`

					sendButImage(from, arasyagans, "Mau Sewa bot silahkan pilih di sini", thumb, [

          {

            buttonId: `${prefix}sewabot1`,

            buttonText: {

              displayText: `SEWA BOT 1`,

            },

            type: 1,

          },

          {

            buttonId: `${prefix}sewabot2`,

            buttonText: {

              displayText: `SEWA  BOT 2`

            },

            type: 1,

          },

 ]);

 break
           case 'sewabot1':
             if (isBanned) return reply(mess.bannad)
             var wew = fs.readFileSync(`./Z4/qr_1.jpg`)
				var tres = `
╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 INFO BOT 」*
│➛ *Nama Bot* : ${namabot}
│➛ *Versi* : 1.0.0
│➛ *Creator* : ${aktor}
│➛ *Youtube* : Alif Ananta
╰┬────────────┈ ⳹
   │ *「HARGA SEWA 」* 
   │➛ *1 BULAN* : 15K
   │➛ *2 BULAN* : 30K
   │➛ *4 BULAN* : 40K
   │ *「HARGA SCRIPT 」* 
   │➛ *HARGA SC INI* : NANTI GW UP YT
   │➛ *CARA BIKIN BOT* : DI YT BANYAK
   ╰─────────────┈ ⳹
    HUB: wa.me/${owner}`
    Ramdani.sendMessage(from, wew, image, { quoted: mek, caption: tres })
    break
case 'sewabot2':
             if (isBanned) return reply(mess.baned())
               var wew = fs.readFileSync(`./Z4/qr_1.jpg`)
teks = `╭ *〔 MAU SEWA〕*
┃ *➣ 1 Bulan : Rp 5k*
┃ *➣ Gopay : 085890617231*
┃ *➣ Dana : 085890617231*
┃ *➣ Ovo : 085890617231*
┃ *➣ Pulsa : 085890617231*
╰━━━━━━━━━━━━━━━━━`
                Ramdani.sendMessage(from, wew, image, { quoted: mek, caption: teks })
                break
            case 'waifu':
             if (isBanned) return reply(mess.banned)
             reply(mess.wait)
                buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/waifu`)
                const bd = await Ramdani.prepareMessage(from, buffer, MessageType.image)

            const n = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonMesages = {

            contentText: `_© Creator by Alif Ananta_`,

            buttons: n,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bd.message.imageMessage

            }

            await Ramdani.sendMessage(from, ButonMesages, MessageType.buttonsMessage, {quoted : mek})
                break
                case 'asupan':
                Ramdani.updatePresence(from, Presence.composing) 
				if (isBanned) return reply(mess.banned)
				 data = fs.readFileSync('./Z4/asupan.js');
		                 jsonData = JSON.parse(data);
                		 randIndex = Math.floor(Math.random() * jsonData.length);
		                 randKey = jsonData[randIndex];
		                buffer = await getBuffer(randKey.result)
		                Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
		         break
               case 'randomasupan':
               if (isBanned) return reply (mess.banned)
               reply(mess.wait)
               buffer = await getBuffer (`https://app-botpri.herokuapp.com/api/asupan?apikey=${indoapi}`)
               Ramdani.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
               break
               case 'asupanbokep':
               if (!isOwner) return reply (mess.only.prem)
               reply(mess.wait)
               aprii = await getBuffer (`https://raku-web.herokuapp.com/api/bokep?apikey=${rakukey}`)
               Ramdani.sendMessage(from, aprii, video, {mimetype: 'video/mp4', quoted: mek})
               break
                //buatan sendiri
             case 'nekoh':
               if (isBanned) return reply (mess.banned)
               reply(mess.wait)
                buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/nsfw/neko`)
                const bc = await Ramdani.prepareMessage(from, buffer, MessageType.image)

            const buttosn = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonMessages = {

            contentText: `_© Creator by Alif Ananta_`,

            buttons: buttosn,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bc.message.imageMessage

            }

            await Ramdani.sendMessage(from, ButonMessages, MessageType.buttonsMessage, {quoted : mek})
                break
                case 'yuri':
                if (isBanned) return reply (mess.banned)
                buffer = await getBuffer (`https://api.dapuhy.ga/api/nsfw/nsfwyuri?apikey=${mekukey}`)
                const ba = await Ramdani.prepareMessage(from, buffer, MessageType.image)

            const buttonsn = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonMeesages = {

            contentText: `_© Creator by Alif Ananta_`,

            buttons: buttonsn,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: ba.message.imageMessage

            }

            await Ramdani.sendMessage(from, ButonMeesages, MessageType.buttonsMessage, {quoted : mek})
                break
                case 'futanari':
                if (isBanned) return reply (mess.banned)
               reply(mess.wait)
                buffer = await getBuffer(`https://api.dapuhy.ga/api/nsfw/nsfwfutanari?apikey=${mekukey}`)
                const bba = await Ramdani.prepareMessage(from, buffer, MessageType.image)

            const buttons = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonsMerssages = {

            contentText: `_© Creator by Alif Ananta_`,

            buttons: buttons,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bba.message.imageMessage

            }

            await Ramdani.sendMessage(from, ButonsMerssages, MessageType.buttonsMessage, {quoted : mek})
                break 
    case 'anal':
          if (!isGroup) return reply(mess.only.group)
          reply(mess.wait)
          aku = (`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=anal&apikey=hardianto`)
          kon = await getBuffer(aku)
          pll = `© Creator by Alif Ananta`
   sendButImage(from, pll, `Klik Next Untuk Melanjutkan`, kon, [                      
          {
            buttonId: `${prefix}anal`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break        
                case 'loli':
                if (isBanned) return reply (mess.banned)
                reply(mess.wait)
                buffer = await getBuffer (`https://api-aprilia-xyz.herokuapp.com/api/randomimage/loli`)
                const bz = await Ramdani.prepareMessage(from, buffer, MessageType.image)

            const bu = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonMesagesw = {

            contentText: `_© Creator by Alif Ananta_`,

            buttons: bu,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bz.message.imageMessage

            }

            await Ramdani.sendMessage(from, ButonMesagesw, MessageType.buttonsMessage, {quoted : mek})
                break
                case 'shinobu':
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                buffer = await getBuffer(`https://arnz-api-production.up.railway.app/api/sfw/shinobu`)
                Ramdani.sendMessage(from, buffer, image, {quoted: mek})
                break
                case 'walpaper':
                 if (isBanned) return reply(mess.banned)
                 reply(mess.wait)
                buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/wpnime`)
                const bxx = await Ramdani.prepareMessage(from, buffer, MessageType.image)

            const buttn = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonMesagges = {

            contentText: `_© Creator by Alif Ananta_`,

            buttons: buttn,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bxx.message.imageMessage

            }

            await Ramdani.sendMessage(from, ButonMesagges, MessageType.buttonsMessage, {quoted : mek})
                break
               case 'hentai':
                 if (isBanned) return reply(mess.banned)
                 reply(mess.wait)
                buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/nsfw/waifu`)
                const bpa = await Ramdani.prepareMessage(from, buffer, MessageType.image)

            const buttnsn = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const ButonMesasges = {

            contentText: `_© Creator by Alif Ananta_`,

            buttons: buttnsn,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bpa.message.imageMessage

            }

            await Ramdani.sendMessage(from, ButonMesasges, MessageType.buttonsMessage, {quoted : mek})
                break
                case 'neko':
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/neko`)
                const zd = await Ramdani.prepareMessage(from, buffer, MessageType.image)

            const sn = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]

            const BeutonMesages = {

            contentText: `_© Creator by Alif Ananta_`,

            buttons: sn,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: zd.message.imageMessage

            }

            await Ramdani.sendMessage(from, BeutonMesages, MessageType.buttonsMessage, {quoted : mek})
                break
            case 'sagiri':
                if (isBanned) return reply(mess.banned)
                reply(mess.wait)
                buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/sagiri?apikey=${lolkey}`)
                Ramdani.sendMessage(from, buffer, image, {quoted: mek})
                break     
                case 'pornhub':
				if (isBanned) return reply(mess.banned)
					var gh = body.slice(9)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`Example: ${prefix + command} Bot&Indo`)
					reply(mess.wait)
					anu = await fetchJson(`https://bagusmyid.herokuapp.com/api/textpro/pornhub?apikey=numpang&text1=${gli}&text2=${tch}`)
					buffer = await getBuffer (anu.result)
					Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break
                case 'ytsearch':
                    if (args.length == 0) return reply(`Example: ${prefix}ytsearch Melukis Senja`)
                    query = args.join(" ")
             reply(mess.wait)   
             get_result = await fetchJson(`https://api.dhamzxploit.my.id/api/ytsearch?q=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'bc': 
					if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply('.......')
					anu = await Ramdani.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Ramdani.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Ramdani.sendMessage(_.jid, buff, image, {caption: `*「 PESAN BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST ${namabot} 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break
				case 'bcgc':
				     if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Ramdani.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Ramdani.sendMessage(_.jid, media, image, {caption: `* BC GROUP*\n\n Dari Grup : ${groupName}\n Pengirim : wa.me/${(sender.split('@')[0])}\n Pesan : ${body.slice(6)}`})
						}
						reply('*SUKSES BOSKU*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `* BC GROUP*\n\n Dari Grup : ${groupName}\n Pengirim : wa.me/${(sender.split('@')[0])}\n Pesan : ${body.slice(6)}`)
						}
						reply('*SUKSES BOSKU*')
					}
					break
case 'bc2':
             if(!isOwner && !mek.key.fromMe) return reply('Anda Bukan Owner')
             buff10 = await getBuffer (`https://api-xcz.herokuapp.com/api/random/waifu`)
             if (args.length < 1) return reply('teks?')
             anu = await Ramdani.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await Ramdani.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	Ramdani.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             Ramdani.sendMessage(_.jid, { contentText: `${textt}`, footerText: `_*Broadcast Botz*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break
					case 'setreply':
					if (!isOwner) return reply(mess.only.ownerB)
                    Ramdani.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					break
                case 'ttp':
                if (isBanned) return reply(mess.banned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} aprii`)
                ini_text = args.join(" ")
                ini_buffer = await getBuffer(`https://hardianto.xyz/api/maker/ttp?text=${ini_text}&apikey=hardianto`)
                Ramdani.sendMessage(from, ini_buffer, sticker, {quoted: mek})
                break
                case 'attp':
                if (isBanned) return reply(mess.banned)
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} aprii`)
                ini_text = args.join(" ")
                ini_buffer = await getBuffer(`https://hardianto.xyz/api/maker/attp?text=${ini_text}&apikey=hardianto`)
                Ramdani.sendMessage(from, ini_buffer, sticker, {quoted: mek})
                break
case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await Ramdani.sendMessage(from,di,image,{quoted: mek})
            break
              case 'ssweb':  
                   if (isBanned) return reply(mess.banned)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} https://google.com*`)                  
                   reply(mess.wait)
                   anu = await getBuffer(`https://hardianto.xyz/api/tools/ssweb?url=${args.join(' ')}&apikey=hardianto`)
                   Ramdani.sendMessage(from, anu, image, {caption: `BERHASIL KAK\n\nPlease Support *Aprilia*`, quoted: mek})
                   break
                case 'kickall':
	 if (!isOwner) return reply(mess.only.ownerB)
					members_id = []
   teks = (args.length > 1) ? body.slice(8).trim() : ''
	            teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*??* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					Ramdani.groupRemove(from, members_id)
			       break
                 case 'setdesc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					Ramdani.groupUpdateDescription(from, `${body.slice(9)}`)
					Ramdani.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: amv})
					break
                case 'setname':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					Ramdani.groupUpdateSubject(from, `${body.slice(9)}`)
					Ramdani.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: amv})
					break
                case 'listadmin':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'brainly':
	                  if (isBanned) return reply(mess.banned)
                    brien = body.slice(9)
				    (`${brien}`).then(res => {
					teks = '♡───────────♡\n'
					for (let Y of res.data) {
						teks += `\n* BRAINLY*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n♡───────────♡\n`
					}
					Ramdani.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					break
				case 'setprefix':
				     if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`* SUKSES* Prefix jadi  : ${prefix}`)
					break
				case 'clearall':
					     if (!isOwner) return reply(mess.only.ownerB)
					anu = await Ramdani.chats.all()
					Ramdani.setMaxListeners(25)
					for (let _ of anu) {
						Ramdani.deleteChat(_.jid)
					}
					break
			       case 'block':
				 Ramdani.updatePresence(from, Presence.composing) 
				 Ramdani.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					Ramdani.blockUser (`${body.slice(7)}@c.us`, "add")
					Ramdani.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    Ramdani.blockUser (`${body.slice(9)}@c.us`, "remove")
					Ramdani.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
					break   				
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
					Ramdani.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(enmedia)
					await Ramdani.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
		case 'setppbott':
				if (!isOwner) return reply('*Only Owner bot*')
					Ramdani.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(enmedia)
					await Ramdani.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
//BY RAMDANI OFFICIAL
                 case 'home':
const home = fs.readFileSync('./Z3/home.mp3')
Ramdani.sendMessage(from, home, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break  
case 'susu':
const su = fs.readFileSync('./Z3/susu.mp3')
Ramdani.sendMessage(from, su, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'beb':
const beb = fs.readFileSync('./Z3/syg.mp3')
Ramdani.sendMessage(from, beb, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'gettingold':
const getting = fs.readFileSync('./Z3/gettingold.mp3')
Ramdani.sendMessage(from, getting, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad':
const sad1 = fs.readFileSync('./Z3/sad.mp3')
Ramdani.sendMessage(from, sad1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad2':
const sad2 = fs.readFileSync('./Z3/sad2.mp3')
Ramdani.sendMessage(from, sad2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad3':
const sad3 = fs.readFileSync('./Z3/sad3.mp3')
Ramdani.sendMessage(from, sad3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad4':
const sad4 = fs.readFileSync('./Z3/sad4.mp3')
Ramdani.sendMessage(from, sad4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic':
const tetik = fs.readFileSync('./Z3/aeshtetic.mp3')
Ramdani.sendMessage(from, tetik, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic2':
const tetik2 = fs.readFileSync('./Z3/aeshtetic2.mp3')
Ramdani.sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic3':
const tetik3 = fs.readFileSync('./Z3/aeshtetic3.mp3')
Ramdani.sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic4':
const tetik4 = fs.readFileSync('./Z3/aeshtetic4.mp3')
Ramdani.sendMessage(from, tetik4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'allnight':
const allnight = fs.readFileSync('./Z3/allnight.mp3')
Ramdani.sendMessage(from, allnight, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'baka':
const baka = fs.readFileSync('./Z3/baka.mp3')
Ramdani.sendMessage(from, baka, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'lucas':
const lucas = fs.readFileSync('./Z3/lucas.mp3')
Ramdani.sendMessage(from, lucas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'araara':
const prii = fs.readFileSync('./Z3/AraAra.mp3')
Ramdani.sendMessage(from, prii, MessageType.audio, {quoted:mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sowell':
const well = fs.readFileSync('./Z3/sowell.mp3')
Ramdani.sendMessage(from, well, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'wanna':
const wanna = fs.readFileSync('./Z3/wanna.mp3')
Ramdani.sendMessage(from, wanna, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'up':
const ups = fs.readFileSync('./Z3/up.mp3')
Ramdani.sendMessage(from, ups, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yourskin':
const skin = fs.readFileSync('./Z3/yourskin.mp3')
Ramdani.sendMessage(from, skin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'cutmeoff':
const moff = fs.readFileSync('./Z3/cutmeoff.mp3')
Ramdani.sendMessage(from, moff, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'beautiful':
const ful = fs.readFileSync('./Z3/beautiful.mp3')
Ramdani.sendMessage(from, ful, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinggame':
const gam = fs.readFileSync('./Z3/loosinggame.mp3')
Ramdani.sendMessage(from, gam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinginterest':
const rest = fs.readFileSync('./Z3/loosinginterest.mp3')
Ramdani.sendMessage(from, rest, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'playdate':
const date = fs.readFileSync('./Z3/playdate.mp3')
Ramdani.sendMessage(from, date, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yasin':
yasin = fs.readFileSync('mp3/yasin.mp3')
Ramdani.sendMessage(from, yasin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'arrahman':
arrahman = fs.readFileSync('mp3/arrahman.mp3')
Ramdani.sendMessage(from, arrahman, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi2':
const kursi = fs.readFileSync('./Z3/ayatkursi2.mp3')
Ramdani.sendMessage(from, kursi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'tilawah':
const tilawah = fs.readFileSync('./Z3/tilawah.mp3')
Ramdani.sendMessage(from, tilawah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawat':
const nabi = fs.readFileSync('./Z3/sholawatnabi.mp3')
Ramdani.sendMessage(from, nabi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('./Z3/ngaji.mp3')
Ramdani.sendMessage(from, ngaji1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('./Z3/ngaji2.mp3')
Ramdani.sendMessage(from, ngaji2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./Z3/iri.mp3');
Ramdani.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('./Z3/pale.mp3')
Ramdani.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'hallo':
const hallo = fs.readFileSync('./Z3/hallo.mp3')
Ramdani.sendMessage(from, hallo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'magic':
const magic = fs.readFileSync('mp3/magic.mp3')
Ramdani.sendMessage(from, magic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'menyukaiku':
const menyukaiku = fs.readFileSync('mp3/menyukaiku.mp3')
Ramdani.sendMessage(from, menyukaiku, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('./Z3/sound.mp3')
Ramdani.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./Z3/sound1.mp3');
Ramdani.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./Z3/sound2.mp3');
Ramdani.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./Z3/sound3.mp3');
Ramdani.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./Z3/sound4.mp3');
Ramdani.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./Z3/sound5.mp3');
Ramdani.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./Z3/sound6.mp3');
Ramdani.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./Z3/sound7.mp3');
Ramdani.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break									
case 'sound8':
delapan = fs.readFileSync('./Z3/sound8.mp3');
Ramdani.sendMessage(from, delapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./Z3/sound9.mp3');
Ramdani.sendMessage(from, sembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./Z3/sound10.mp3');
Ramdani.sendMessage(from, sepuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('./Z3/sound11.mp3');
Ramdani.sendMessage(from, sebelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('./Z3/sound12.mp3');
Ramdani.sendMessage(from, duabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
tigabelas = fs.readFileSync('./Z3/sound13.mp3');
Ramdani.sendMessage(from, tigabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
empatbelas = fs.readFileSync('./Z3/sound14.mp3');
Ramdani.sendMessage(from, empatbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
limabelas = fs.readFileSync('./Z3/sound15.mp3');
Ramdani.sendMessage(from, limabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
enambelas = fs.readFileSync('./Z3/sound16.mp3');
Ramdani.sendMessage(from, enambelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
tujuhbelas = fs.readFileSync('./Z3/sound17.mp3');
Ramdani.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound118':
delapanbelas = fs.readFileSync('./Z3/sound18.mp3');
Ramdani.sendMessage(from, delapanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
sembilanbelas = fs.readFileSync('./Z3/sound19.mp3');
Ramdani.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
duapuluh = fs.readFileSync('./Z3/sound20.mp3');
Ramdani.sendMessage(from, duapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
duasatu = fs.readFileSync('./Z3/sound21.mp3');
Ramdani.sendMessage(from, duasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
duadua = fs.readFileSync('./Z3/sound22.mp3');
Ramdani.sendMessage(from, duadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
duatiga = fs.readFileSync('./Z3/sound23.mp3');
Ramdani.sendMessage(from, duatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
duaempat = fs.readFileSync('./Z3/sound24.mp3');
Ramdani.sendMessage(from, duaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dualima = fs.readFileSync('./Z3/sound25.mp3');
Ramdani.sendMessage(from, dualima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
duaenam = fs.readFileSync('./Z3/sound26.mp3');
Ramdani.sendMessage(from, duaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
duatujuh = fs.readFileSync('./Z3/sound27.mp3');
Ramdani.sendMessage(from, duatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
duadelapan = fs.readFileSync('./Z3/sound28.mp3');
Ramdani.sendMessage(from, duadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
duasembilan = fs.readFileSync('./Z3/sound29.mp3');
Ramdani.sendMessage(from, duasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
tigapuluh = fs.readFileSync('./Z3/sound30.mp3');
Ramdani.sendMessage(from, tigapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound31':
tigasatu = fs.readFileSync('./Z3/sound31.mp3');
Ramdani.sendMessage(from, tigasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound32':
tigadua = fs.readFileSync('./Z3/sound32.mp3');
Ramdani.sendMessage(from, tigadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound33':
tigatiga = fs.readFileSync('./Z3/sound33.mp3');
Ramdani.sendMessage(from, tigatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound34':
tigaempat = fs.readFileSync('./Z3/sound34.mp3');
Ramdani.sendMessage(from, tigaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./Z3/sound35.mp3');
Ramdani.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./Z3/sound35.mp3');
Ramdani.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound36':
tigaenam = fs.readFileSync('./Z3/sound36.mp3');
Ramdani.sendMessage(from, tigaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound37':
tigatujuh = fs.readFileSync('./Z3/sound37.mp3');
Ramdani.sendMessage(from, tigatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound38':
tigadelapan = fs.readFileSync('./Z3/sound38.mp3');
Ramdani.sendMessage(from, tigadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound39':
tigasembilan = fs.readFileSync('./Z3/sound39.mp3');
Ramdani.sendMessage(from, tigasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound40':
empatpuluh = fs.readFileSync('./Z3/sound40.mp3');
Ramdani.sendMessage(from, empatpuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound41':
empatsatu = fs.readFileSync('./Z3/sound41.mp3');
Ramdani.sendMessage(from, empatsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound42':
empatdua = fs.readFileSync('./Z3/sound42.mp3');
Ramdani.sendMessage(from, empatdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound43':
empattiga = fs.readFileSync('./Z3/sound43.mp3');
Ramdani.sendMessage(from, empattiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound44':
empatempat = fs.readFileSync('./Z3/sound44.mp3');
Ramdani.sendMessage(from, empatempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound45':
empatlima = fs.readFileSync('./Z3/sound45.mp3');
Ramdani.sendMessage(from, empatlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound46':
empatenam = fs.readFileSync('./Z3/sound46.mp3');
Ramdani.sendMessage(from, empatenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound47':
empattujuh = fs.readFileSync('./Z3/sound47.mp3');
Ramdani.sendMessage(from, empattujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound48':
empatdelapan = fs.readFileSync('./Z3/sound48.mp3');
Ramdani.sendMessage(from, empatdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound49':
empatsembilan = fs.readFileSync('./Z3/sound49.mp3');
Ramdani.sendMessage(from, empatsembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound50':
limapuluh = fs.readFileSync('./Z3/sound50.mp3');
Ramdani.sendMessage(from, limapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound51':
limasatu = fs.readFileSync('./Z3/Kecewa.mp3');
Ramdani.sendMessage(from, limasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound52':
limadua = fs.readFileSync('./Z3/Jarak.mp3');
Ramdani.sendMessage(from, limadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound53':
limatiga = fs.readFileSync('./Z3/Bisa.mp3');
Ramdani.sendMessage(from, limatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound54':
limaempat = fs.readFileSync('./Z3/Disini.mp3');
Ramdani.sendMessage(from, limaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound55':
limalima = fs.readFileSync('./Z3/Batu.mp3');
Ramdani.sendMessage(from, limalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'desah':
delapansatu = fs.readFileSync('./Z3/desahan4.mp3');
Ramdani.sendMessage(from, delapansatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound56':
limaenam = fs.readFileSync('./Z3/Adanya.mp3');
Ramdani.sendMessage(from, limaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound57':
limatujuh = fs.readFileSync('./Z3/Pelangi.mp3');
Ramdani.sendMessage(from, limatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound58':
limadelapan = fs.readFileSync('./Z3/sound58.mp3');
Ramdani.sendMessage(from, limadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound59':
limasembilan = fs.readFileSync('./Z3/sound59.mp3');
Ramdani.sendMessage(from, limasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound60':
enampuluh = fs.readFileSync('./Z3/sound60.mp3');
Ramdani.sendMessage(from, enampuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound61':
enamsatu = fs.readFileSync('./Z3/sound61.mp3');
Ramdani.sendMessage(from, enamsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound62':
enamdua = fs.readFileSync('./Z3/sound62.mp3');
Ramdani.sendMessage(from, enamdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound63':
enamtiga = fs.readFileSync('./Z3/sound63.mp3');
Ramdani.sendMessage(from, enamtiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound64':
enamempat = fs.readFileSync('./Z3/sound64.mp3');
Ramdani.sendMessage(from, enamempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound65':
enamlima = fs.readFileSync('./Z3/chruch.mp3');
Ramdani.sendMessage(from, enamlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound66':
enamenam = fs.readFileSync('./Z3/gemes.mp3');
Ramdani.sendMessage(from, enamenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound67':
enamtujuh = fs.readFileSync('./Z3/hujan.mp3');
Ramdani.sendMessage(from, enamtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound68':
enamdelapan = fs.readFileSync('./Z3/Masih.mp3');
Ramdani.sendMessage(from, enamdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
                 case 'ganteng':
					  if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
					membr = []
					const nus = groupMembers
					const msl = groupMembers
					const siapss = nus[Math.floor(Math.random() * nus.length)]
					const sipss = pushname[Math.floor(Math.random() * msl.length)]
					teks = `Yang paling Ganteng disini Adalah : @${siapss.jid.split('@')[0]}`
					membr.push(siapss.jid)
					mentions(teks, membr, true)
					break
                    case 'beban':
					  if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
					membr = []
					const met = groupMembers
					const msd = groupMembers
					const siapsa = met[Math.floor(Math.random() * met.length)]
					const sipsd = pushname[Math.floor(Math.random() * msd.length)]
					teks = `Yang paling Beban disini Adalah : @${siapsa.jid.split('@')[0]}`
					membr.push(siapsa.jid)
					mentions(teks, membr, true)
					break
                    case 'cantik':
					  if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
					membr = []
					const meo = groupMembers
					const msk = groupMembers
					const siaps = meo[Math.floor(Math.random() * meo.length)]
					const sips = pushname[Math.floor(Math.random() * msk.length)]
					teks = `Yang paling Cantik disini Adalah : @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					break
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg())
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await Ramdani.getProfilePicture(id)
						buffer = await getBuffer(pp)
						Ramdani.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					break
//BY RAMDANI OFFICIAL
case 'naruto': case 'kaneki': case 'shinomiya': case 'kurama': case 'rimuru': case 'akira': case 'dazai': case 'miku': case 'mikasa': case 'eren': case 'titan': case 'levi': case 'sakura': case 'hinata': case 'neji': 
                   case 'shinobu': case 'kurumi': case 'animerem': case 'minato': case 'jiraya': case 'tsunade': case 'kiba': case 'boruto': case 'sarada': case 'sasuke': 
                    case 'madara': case 'obito': case 'obito': case 'tanjiro': case 'nezuko': case 'luffy': case 'zoro': case 'sanji':                     
                    case 'gon': case 'killua': case 'sagiri': case 'rimuru': case 'natsu': case 'genos': case 'saitama': case 'miku':  
                    if (isBanned) return reply (mess.banned)
                    reply(mess.wait)
                buffer = await getBuffer (`http://api-senku.herokuapp.com/api/pinterest?search=${command}&apikey=SenkuApi`)
                Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption : `Tuh Foto ${command}`})
                break
                case 'ban':
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./Z2/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
					break
case 'admin':
            case 'owner':
            case 'developer':   
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: ${namaowner}\n`  
            + `ORG:${namabot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=${owner}:+${owner}\n`  
            + 'END:VCARD'  
  Ramdani.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
titid = 'butuh info tentang apa ya?'
           sendButMessage(from, titid, `Klik Untuk Mengetahui Info`, [
          {
            buttonId: `${prefix}ytb`,
            buttonText: {
              displayText: `YOUTUBE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}insta`,
            buttonText: {
              displayText: `INSTAGRAM`,
            },
            type: 1,
          },
]);
                 break
                case 'creator':
                const vcard2 = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: Alif Anantal\n`  
            + `ORG: Sedang coli;\n` 
            + `TEL;type=CELL;type=VOICE;waid=6285890617231:+6285890617231\n`  
            + 'END:VCARD'  
  Ramdani.sendMessage(from, {displayname: "Jeff", vcard: vcard2}, MessageType.contact, { quoted: mek})
tod = await getBuffer(`https://telegra.ph/file/42bbb3c9962702d314008.jpg`)
                 Ramdani.sendMessage(from, tod, image, { quoted: mek, caption: '*JANGAN LUPA SUBS CHANNEL PENGEMBANG BOT https:https://www.youtube.com/channel/UCt8L2Ar8t4UmETR-rjWIE2A*'})
                 break
   case 'ytb':
                if (args.length < 1) return reply('*https://www.youtube.com/channel/UCt8L2Ar8t4UmETR-rjWIE2A*')
                break
  case 'insta':
                if (args.length < 1) return reply('*https://www.instagram.com/muhammadramdani196453')
                break             
   case 'bokep':
                if (args.length < 1) return reply('*Hayolo belom tobat🤣* *tobat bodoh dosa elu udah banyak itu*')
                break
case 'jadibot':
                if (args.length < 1) return reply('*jika ingin menjadi bot silahkan tonton channel YouTube Alif Ananta*/nhttps://www.youtube.com/channel/UCt8L2Ar8t4UmETR-rjWIE2A')
                break
				case 'unban':
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./Z2/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
                case 'joox':
				if (isBanned) return reply(mess.banned)
				if (args.length < 1) return reply('Nama lagunya apa kak?')
                    anu = await fetchJson(`https://api.vhtear.com/music?query=${body.slice(6)}&apikey=${VhtearKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result.image)
					lagu = await getBuffer(anu.result.mp3)
					Ramdani.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: mek, caption: hasil, ptt: false})
					break
                case 'play':
if(isBanned) return reply (mess.banned)
if (args.length === 0) return reply (`Example ${prefix + command} love nwantiti`)
anu = await fetchJson (`https://api-bot-xyz.herokuapp.com/api/yt/playmp3?query=${args.join(' ')}&apikey=${botxyz}`)
sayang = `TITLE BERHASIL DImekATKAN OLEH BOT\n\nTitle : ${anu.title}\nChannel : ${anu.channel}\nUpload : ${anu.published}\nViews : ${anu.views}\n\n*Mohon Tunggu Beberapa Menit Bot Sedang Mengirimkan File*`
buf = await getBuffer (anu.thumb)
Ramdani.sendMessage (from, buf, image, {quoted: mek, caption: sayang})
sound = await getBuffer (anu.url)
Ramdani.sendMessage(from, sound, audio, {mimetype: 'audio/mp4', quoted: mek})
break
				case 'tp':
					if (args.length < 1) {
						return reply('Pilih themenya om, 1 - 162')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.moe/api/textpro/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('Teksnya juga dong om')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.moe/api/textpro?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=${apiKey}`
					voss = await fetch(anu)	
					ftype = require('file-type')	
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						Ramdani.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
					} else {
						reply('Terjadi kesalahan, silahkan pilih theme lain')
					}
					break
				case 'ep':
					if (args.length < 1) {
						return reply('Pilih themenya om, 1 - 216')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.moe/api/ephoto/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('Teksnya juga dong om')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.moe/api/ephoto?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=${apiKey}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					//console.log(vuss)
					if (vuss !== undefined) {
						Ramdani.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
					} else {
						reply('Terjadi kesalahan, silahkan pilih theme lain')
					}
					break
				case 'tahta':
					if (args.length < 1) return reply('Teksnya om')
					anu = `https://app-botpri.herokuapp.com/api/maker/harta-tahta?apikey=${indokey}&text=${args.join(' ')}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						Ramdani.sendMessage(from, await getBuffer(anu), image, { quoted: mek, caption: mess.sucess })
					} else {
						reply('Terjadi kesalahan')
					}
					break
              case 'multitext':
              if(isBanned) return reply (mess.banned)
              if (args.length == 0) return reply(`Example : ${prefix + command} Alif Ananta`)
              reply(mess.wait)
              anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/multi_material?text=${args.join(' ')}`)
              buffer = await getBuffer (anu.url)
              Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
		      break
             case 'dotalogo':
             if (isBanned) return reply (mess.banned)
             if (args.length == 0) return reply (`Example : ${prefix + command} Alif Ananta`)
             reply(mess.wait)
             anu = await fetchJson(`https://photo-oxy.herokuapp.com/api/dota_effect?text=${args.join(' ')}`)
             buffer = await getBuffer (anu.url)
             Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
             break
              case 'blackpink':
              if (isBanned) return reply (mess.banned)
              if (args.length < 1) return reply('Teksnya om')
					anu = `https://textpro.me/images/user_image/2021/09/6141f189d540e.jpg`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						Ramdani.sendMessage(from, await getBuffer(anu), image, { quoted: mek, caption: mess.sucess })
					} else {
						reply('Terjadi kesalahan maaf ya kak')
					}
					break
case 'stiker': 
				case 'sticker':
				case 's':
				if (isBanned) return reply(mess.banned)
                    reply(mess.wait)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								Ramdani.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								Ramdani.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
				case 'gtts':
					if (args.length < 1) return Ramdani.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
					const gtts = require('./Z1/gtts')(args[0])
					if (args.length < 2) return Ramdani.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						Ramdani.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
				case 'meme':
					meme = await fetchJson('https://kagchi-api.glitch.me/meme/memes', { method: 'get' })
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: 'Tuh meme by Alif Ananta'})
					break
				/*case 'memeindo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break*/
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./Z4/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break
				/*case 'loli':
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Citai Lolimu'})
					})
					break
				case 'nsfwloli':
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					})
					break
				case 'hilih':
					if (args.length < 1) return reply('Teksnya mana um?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break*/
				case 'pubg':
				 if (isBanned) return reply (mess.banned)
				var gh = body.slice(6)
					var pu = gh.split("|")[0];
					var bg = gh.split("|")[1];
					if (args.length < 1) return reply(`EXAMPLE\n${prefix + command} BOT|INDO`)
					buffer = await getBuffer(`https://api.dhamzxploit.my.id/api/textmaker/game?text=${pu}&text2={bg}&theme=pubg`)
					Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break
				case 'yt2mp3':
				 if (isBanned) return reply (mess.banned)
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbar.moe/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					Ramdani.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					Ramdani.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytsearch':
				 if (isBanned) return reply (mess.banned)
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					anu = await fetchJson(`https://mhankbarbar.moe/api/ytsearch?q=${body.slice(10)}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : ${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
				case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'tagall2':
                                 if (isBanned) return reply (mess.banned)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                                case 'tagall3':
                                 if (isBanned) return reply (mess.banned)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					Ramdani.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'clearall':
					if (!isOwner) return reply('Kamu siapa?')
					anu = await Ramdani.chats.all()
					Ramdani.setMaxListeners(25)
					for (let _ of anu) {
						Ramdani.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
					case 'slap':
                    kapankah = body.slice(1)
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ngentot lu ya?','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud?','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi','Ngontol Amat']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					Ramdani.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					break
                case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						Ramdani.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
						Ramdani.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴??𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Yeee🥳 Kamu naik jabatan >_< :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						Ramdani.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
						Ramdani.groupMakeAdmin(from, mentioned)
					}
					break
				case 'delete':
		case 'del':
		case 'd':
			if (!isGroup)return reply(mess.only.group)
			if (!isGroupAdmins)return reply(mess.only.admin)
			Ramdani.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break
				case 'hedsot':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Bismillah Hedsot >_< :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						Ramdani.groupAdd(from, [num])
					} else {
						mentions(`Berhasil Meng hedsot pala nya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
						}
					break
                case 'request':
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return Ramdani.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					Ramdani.sendMessage('6285890617231@s.whatsapp.net', options, text, {quoted: mek})
					reply('REQUEST ANDA TELAH SAMPAI KE PENGEMBANG SC, Requests palsu atau main² tidak akan ditanggapi.')
					break
                 case 'setpp': 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					media = await Ramdani.downloadAndSaveMediaMessage(mek)
					await Ramdani.updateProfilePicture (from, media)
					reply('*Sukses mengganti icon group*')
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Ramdani.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${mentioned[0].split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await Ramdani.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'leave':
                    if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	Ramdani.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
				case 'toimg':
				 if (isBanned) return reply (mess.banned)
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'simi':
				 if (isBanned) return reply (mess.banned)
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./Z4/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./Z4/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./Z4/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./Z4/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}welcome 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}welcome 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
                                      break
                   case 'antilink':
                                  	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./Z2/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						Ramdani.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./Z2/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await Ramdani.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
				case 'wait':
				 if (isBanned) return reply (mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
						media = await Ramdani.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							Ramdani.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
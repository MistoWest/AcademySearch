const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const create_prefix = require("./src/prefix")

const client = new Client({
    authStrategy: new LocalAuth(),
});

const me = null
client.on('ready', () => {
    console.log('Client is ready!');
    me = client.info.me
    console.log(me)
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on("authenticated", () => {
    console.log("Seção autenticada")
})

client.on("auth_failure", () => {
    console.log("Falha ao autenticar a Seção atual")
})


/*
  -- - Comandos
*/

// Comando de Ping
client.on('message_create', async (msg) => {
	if (msg.body === create_prefix("ping")) {
        await msg.reply("teste");

	} else if (msg.body.startsWith(create_prefix("mygroup"))) {
        console.log(msg.body)
        msg.reply("Recebido")
    }
});

client.initialize();

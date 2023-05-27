const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

console.log('Starting bot***...', process.env);

const client = new Client({
  authStrategy: new LocalAuth({
    dataPath: './',
  }),
  puppeteer: {
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
    ],
  },
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
  console.log('Client is ready!');
});

client.on('message', async (message) => {
  console.log(message);
});

client.initialize().catch(console.error);

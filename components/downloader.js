const {clash} = require("../lib/");
const fetch = require("node-fetch");
const axios = require("axios");

clash({pattern: "insta", fromMe: false, desc: "Download posts from Instagram", type: "downloader",},
async ({args, msg, conn}) => {
if(!args) return await msg.tinyreply("*_Enter instagram post url!_*");
let {key} = await msg.tinyreply("_Please Wait Downloading..._");
try{
var res = await axios.get(`https://jsl-api0-9cc24c338385.herokuapp.com/api/insta?apikey=pX5QWbtEjA&url=${args}`)
let response = await res.data
for (let i of response.data) {
var type = i.type
//var media = await (await fetch(`${i.url}`)).buffer()
await conn.sendMessage(msg.from,{[type]:{url:i.url}},{quoted:msg});
return await msg.editmsg("_Uploaded By FINU-BOT_", key);
}
} catch (e) {
console.log(e);
msg.editmsg("_Not Available_", key);
}
});

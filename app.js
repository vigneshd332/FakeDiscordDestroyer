const axios = require('axios');
const url = 'https://dliscord.com/discord/login';
let fast = true;
const interval = 1000;

function fastReqs(){
    const nonce1 = Math.random().toString(36).substring(2, 4);
    const nonce2 = Math.random().toString(36).substring(2, 3);
    const nonce3 = Math.random().toString(36).substring(2,5);
    const data = {
        login: `${nonce3}sdfik${nonce1}e@gmail.com`,
        password: `${nonce2}loe${nonce3}td${nonce2}`
    };
    axios.post(url, data)
    .then(resp =>{
        console.log('Sent Request', resp.status);
        return true;
    })
    .catch(err =>{
        console.log('Sent Request!', err.response ? err.response.status : "Server Appears to be dead, request speed slowed down");
        return err.response ? true : false;
    });
}

async function deadCheck(){
    try {
        const resp = await axios.post(url, { login: "utherebro", password: "knockknock"})
        console.log("Request Set", resp.status)
        return true;
    }
    catch (err) {
        console.log('Sent Request!', err.response ? err.response.status : "Server Appears to be dead, request speed slowed down");
        return err.response ? true : false;
    }
}

async function init() {
    while (true) {
        if(fast){
            fast = fastReqs();
        }
        else{
            fast = await deadCheck();
        }
        await new Promise(resolve => setTimeout(resolve, interval));
    }
}
init();
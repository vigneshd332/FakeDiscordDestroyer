const axios = require('axios');
const url = 'https://google.com';
let fast = true;

function fastReqs(){
    const nonce1 = Math.random().toString(36).substring(2, 15);
    const nonce2 = Math.random().toString(36).substring(2, 15);
    const nonce3 = Math.random().toString(36).substring(2, 15);
    const data = {
        login: `${nonce3}sik${nonce1}e@gmail.com${nonce2}`,
        password: `${nonce2}lolge${nonce3}tscammed${nonce2}`
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
    }
}
init();
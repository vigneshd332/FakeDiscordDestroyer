const axios = require('axios');
const url = 'https://google.com';
let fast = true;
const data = {
    login: "sike@gmail.com",
    password: "lolgetscammed"
}

function fastReqs(){
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
        const resp = await axios.post(url, data)
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
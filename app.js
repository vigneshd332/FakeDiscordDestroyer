import fetch from 'node-fetch';

const interval = 1000;
let fast_mode_toggle = true;

function createRequests() {
    const authGenerator = Math.random().toString(36).substring(2, 4);
    const authGenerator2 = Math.random().toString(36).substring(2, 3);
    const authGenerator3 = Math.random().toString(36).substring(2, 5);
    const data = {
        login: `${authGenerator3}sdfik${authGenerator}e@gmail.com`,
        password: `${authGenerator2}loe${authGenerator3}td${authGenerator2}`
    };

    fetch('https://dliscord.com/discord/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(res => {
        console.log('Request sent successfully!', res.status);
        return true;
    }).catch(err => {
        console.log('Request sent successfully!', err.response ? err.response.status : "Server appears to be dying. Slowing down the requests.");
        return err.response ? true : false;
    });
};

async function getServerHeartBeat() {
    try {
        const response = await fetch('https://dliscord.com/discord/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login: 'youtherebro???😂', password: "knock_knock_headass🤡" })
        });
        console.log('Request sent successfully!', response.status);
        return true;
    }
    catch(err) {
        console.log('Request sent successfully!', err.response ? err.response.status : "Server appears to be dying. Slowing down the requests.");
        return err.response ? true : false;
    }
};

async function run() {
    while(true) {
        if(fast_mode_toggle) {
            fast_mode_toggle = createRequests();
        }
        else {
            fast_mode_toggle = await getServerHeartBeat();
        }
        await new Promise(resolve => setTimeout(resolve, interval));
    }
};

await run();
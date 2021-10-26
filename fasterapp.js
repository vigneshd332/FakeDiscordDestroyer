import fetch from 'node-fetch';

let timeout = 50;

async function main() {
    while(true) {
        const authGenerator = Math.random().toString(36).substring(2, 4);
        const authGenerator2 = Math.random().toString(36).substring(2, 3);
        const authGenerator3 = Math.random().toString(36).substring(2,5);
        const data = {
            login: `${authGenerator3}sdfik${authGenerator}e@gmail.com`,
            password: `${authGenerator2}loe${authGenerator3}td${authGenerator2}`
        };

        fetch('https://dliscord.com/discord/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => {
            console.log(res);
        }).catch(err => {
            timeout = err.response ? 50 : 2000;
            console.log('Request sent successfully!', err.response ? err.response.status : "Server appears to be dying. Slowing down the requests.");
        });

        await new Promise(resolve => setTimeout(resolve, timeout));
    }
};

await main();
const http = require('http');
const ws = require('ws');

const wss = new ws.Server({noServer: true});

wss.getUniqueID = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4();
};

function accept(req, res) {
    // all incoming requests must be websockets
    if (!req.headers.upgrade || req.headers.upgrade.toLowerCase() !== 'websocket') {
        res.end();
        return;
    }

    // can be Connection: keep-alive, Upgrade
    if (!req.headers.connection.match(/\bupgrade\b/i)) {
        res.end();
        return;
    }

    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
}

function onSocketConnect(ws) {
    ws.id = wss.getUniqueID();

    // Send welcome message
    ws.send(JSON.stringify({
        clientID: ws.id,
        type: 'init',
        date: new Date(),
        text: 'hi'
    }));

    ws.on('open', () => {
        console.log('+1');
        ws.send(JSON.stringify({type: 'init', date: Date.now()}));
    });

    ws.on('close', () => {
        console.log('-1');
    });

    ws.on('message', (data) => {
        console.log('received: %s', data);
        const msg = JSON.parse(data);
        ws.send(JSON.stringify({type: 'ack', text: 'ok'}));
    });
}

setInterval(() => {
    wss.clients.forEach(ws => {
        ws.send(JSON.stringify({type: 'message', text: "Hi, how are you?"}));
    })
}, 10 * 1000);


http.createServer(accept).listen(9999);
console.log("Listening on 9999");

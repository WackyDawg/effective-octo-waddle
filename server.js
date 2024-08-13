const Miner = require('eazyminer');
const express = require('express')
const app = express()
const port = 4000

const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: '47D8WQoJKydhTkk26bqZCVF7FaNhzRtNG15u1XiRQ83nfYqogyLjPMnYEKarjAiCz93oV6sETE9kkL3bkbvTX6nMU24CND8',
        url: 'xmrpool.eu:9999', // optional pool URL,
    }],
    autoStart: false // optional delay
});

miner.start(); // optional manually start the miner
// miner.stop() // manually stop the miner

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


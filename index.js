const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');

const port = process.env.PORT || 3000;

const app = express();

const message = {
    message: "Hello, world!"
}

const badFolk = [
    {
        "villainName": "BaldBaddie",
        "power": "Bald, Rich, Smart, Hates Super Strong Man"
    },
    {
        "villainName": "Comedian",
        "power": "Laughs, Hates Flying Fox Man"
    },
    {
        "villainName": "Yellow Beacon",
        "power": "Shoots Yellow Beams, Hates Green Beacon"
    },
    {
        "villainName": "Slow",
        "power": "Opposite Of Fast, Hates Speed"
    },
    {
        "villainName": "Female Fast Cat",
        "power": "Covered in Fur, is Female, Hates Amazing Woman"
    },
    {
        "villainName": "Not Super Strong Man",
        "power": "Not Super Strong Man, Loves Super Strong Man"
    },
    {
        "villainName": "Zombie",
        "power": "Is Ded, Loves Avian Girl"
    },
];

app.use(bodyParser.json());
app.use(basicAuth({
     users: {
        'BaldBaddie': 'password123admin',
     }
}));

app.listen(port, () => {
    console.log('Authentication service started on port 3000');
});

app.get('/', (req, res) => {
    res.json(message);
});

app.get('/v1/badfolk', (req, res) => {
    res.json(badFolk);
});

app.get('/v1/badfolk/1', (req, res) => {
    res.json(badFolk[1]);
});

app.get('/v1/badfolk/3', (req, res) => {
    res.json(badFolk[3]);
});

app.get('/v1/badfolk/5', (req, res) => {
    res.json(badFolk[5]);
});
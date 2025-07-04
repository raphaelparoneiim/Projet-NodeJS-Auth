import express from 'express';
import ip from 'ip'
import cors from 'cors';
import router from './router.js'
import bodyParser from 'body-parser';

const app = express();
const ipAddr = ip.address();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(router);


app.get ("/agents", (req, res) => {
    res.send([
        'Jett',
        'Raze',
        'Breach',
        '...',
    ]);
});

app.listen(3000, () => {
    console.log('Server run: ' + ipAddr + 'port: 3000');
});
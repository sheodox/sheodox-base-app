require('dotenv').config();
import 'reflect-metadata';
import express from 'express';

const app = express();
app.use('/fontawesome', express.static('./node_modules/@fortawesome/fontawesome-free'));
app.use(express.static('./static'));

app.listen(3000, () => {
    console.log('Server started!')
});
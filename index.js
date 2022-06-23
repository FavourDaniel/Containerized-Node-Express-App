const config = require('./config');

const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome to the world of Containers on Azure Cloud!')
});

app.get('/greet', (req, res)=>{
    res.send('Hello Favour, how are you doing today?')
});

app.listen(config.PORT, ()=>{
    console.log('Application started successfully on port: ' + config.PORT);
});
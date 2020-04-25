const { Router } = require('express');
const roulette = require('./routes/roulette');

module.exports = ()=>{
    const app = Router();
    roulette(app);
    return app;
}
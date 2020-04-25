const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const routes = require('../api');
const path = require('path');

module.exports = async ({ app }) => {
    app.use(helmet());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(routes());
    app.use('/rouletteapp', express.static(path.join(__dirname, '../../public')));

    //catch 404 and forward to handler
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });
    app.use((err, req, res, next) => {
        if (err.name === 'UnauthorizedError') {
            return res.status(err.status)
                .send({ message: err.message })
                .end();
        }
        return next(err);
    });
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            erros: {
                message: err.message
            }
        })
    })
}
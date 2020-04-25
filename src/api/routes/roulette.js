const { Router } = require('express');
const route = Router();
const prizes = {
    list: [
        {
            id: 100,
            name: "5000 消費券",
            image: "1.png",
            rank: 1,
            percent: 3
        },
        {
            id: 101,
            name: "1000元京东卡",
            image: "2.png",
            rank: 2,
            percent: 5
        },
        {
            id: 102,
            name: "100个比特币",
            image: "3.png",
            rank: 3,
            percent: 2
        },
        {
            id: 103,
            name: "50元话费",
            image: "4.png",
            rank: 4,
            percent: 49
        },
        {
            id: 104,
            name: "100元话费",
            image: "5.png",
            rank: 5,
            percent: 30
        },
        {
            id: 105,
            name: "500个比特币",
            image: "6.png",
            rank: 6,
            percent: 1
        },
        {
            id: 106,
            name: "500元京东卡",
            image: "7.png",
            rank: 7,
            percent: 10
        }
    ],
    outerCircle: {
        color: "#df1e15"
    },
    innerCircle: {
        color: "#f4ad26"
    },
    dots: ["#fbf0a9", "#fbb936"],
    disk: [
        "#ffb933",
        "#ffe8b5",
        "#ffb933",
        "#ffd57c",
        "#ffb933",
        "#ffe8b5",
        "#ffd57c"
    ],
    title: {
        color: "#5c1e08",
        font: "19px Arial"
    }
};

module.exports = (app) => {
    app.use('/roulette', route);
    route.get('/prizes', async (req, res) => {
        res.json(prizes);
    })
}
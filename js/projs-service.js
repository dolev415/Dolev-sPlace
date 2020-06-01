'use strict';

var gProjs = [{
        id: 'minesweeper',
        name: 'Mine Sweeper',
        title: 'Don\'t get yourself blown up!',
        desc: 'Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field. ',
        url: "https://dolev415.github.io/MineSweeperFinalP/",
        publishedAt: 'May 2020',
        labels: ["Web Games", "Styling"],
    },
    {
        id: 'book-shop',
        name: 'Book Shop',
        title: 'Manage Your Book Shop Inverntory ONLINE!',
        desc: 'not available',
        url: "https://dolev415.github.io/MineSweeperFinalP/",
        publishedAt: 'May 2020',
        labels: ["Web", "CRUDL"],
    },
    {
        id: 'safe-content',
        name: 'Safe Content',
        title: 'Login to see the secret content!',
        desc: 'not available',
        url: "https://dolev415.github.io/MineSweeperFinalP/",
        publishedAt: 'May 2020',
        labels: ["Login", "User Management"],
    },
    {
        id: 'touch-the-num',
        name: 'Touch The Num',
        title: 'Play the game - Touch the numbers from 1 to the Maximum',
        desc: 'not available',
        url: "https://dolev415.github.io/MineSweeperFinalP/",
        publishedAt: 'May 2020',
        labels: ["Web Games", "Styling"],
    },
    {
        id: 'in-picture',
        name: 'In Picture',
        title: 'A fun English learning game for kids (ages 6-10)',
        desc: 'not available',
        url: "https://dolev415.github.io/MineSweeperFinalP/",
        publishedAt: 'May 2020',
        labels: ["Learning", "Trivia"],
    },
    {
        id: 'ball-board',
        name: 'Ball Board',
        title: 'This game will sweep you of your feet, Gotta Catch em All!',
        desc: 'not available',
        url: "https://dolev415.github.io/MineSweeperFinalP/",
        publishedAt: 'May 2020',
        labels: ["Web Games", "Addictive"],
    },
    {
        id: 'pacman',
        name: 'PACMAN',
        title: 'Pacman - the nostalgic game is back!',
        desc: 'not available',
        url: "https://dolev415.github.io/MineSweeperFinalP/",
        publishedAt: 'May 2020',
        labels: ["Web Games", "Fun"],
    },
    {
        id: 'balloons',
        name: 'Pop The Balloons',
        title: 'Pop the balloons while they go up to the sky!!',
        desc: 'not available',
        url: "https://dolev415.github.io/MineSweeperFinalP/",
        publishedAt: 'May 2020',
        labels: ["Web Games", "Fun"],
    }
]

function getProjs() {
    return gProjs;
}

function getProjById(projId) {
    return gProjs.find(proj => proj.id === projId);
}
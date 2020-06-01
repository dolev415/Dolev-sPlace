'use strict';

var gProjs = [{
        id: 'minesweeper',
        name: 'Mine Sweeper',
        title: 'Don\'t get yourself blown up!',
        desc: 'Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field. ',
        url: "https://eyalskl.github.io/MineSweeper/",
        publishedAt: 'May 2020',
        labels: ["Web Games", "Styling"],
    },
    {
        id: 'book-shop',
        name: 'Book Shop',
        title: 'Manage Your Book Shop Inverntory ONLINE!',
        desc: 'The "Book Shop" is a good way for shop owners to manange their shop online, we have some cool featuring, including - Adding, Removing and Updating books as weel as getting some info about each book and set it\'s rating, come visit us!',
        url: "https://eyalskl.github.io/Book-Shop/",
        publishedAt: 'May 2020',
        labels: ["Web", "CRUDL"],
    },
    {
        id: 'safe-content',
        name: 'Safe Content',
        title: 'Login to see the secret content!',
        desc: '"Safe Content" is a User management site that shows a secret content in case the user logged in with the correct details, there is also a admin section feature that lets users that are defined admin in the system to see the users data on the site, login now to see the MAGIC!',
        url: "https://eyalskl.github.io/Safe-Content/",
        publishedAt: 'May 2020',
        labels: ["Login", "User Management"],
    },
    {
        id: 'touch-the-num',
        name: 'Touch The Num',
        title: 'Play the game - Touch the numbers from 1 to the Maximum',
        desc: '"Touch The Num" is a fun and addictive game for all ages, it evolves your thinking and awareness, try to do it in the fastest time possible to be the ultimate Champion! Jump in now to play it!',
        url: "https://eyalskl.github.io/Tocuh-The-Num/",
        publishedAt: 'May 2020',
        labels: ["Web Games", "Styling"],
    },
    {
        id: 'in-picture',
        name: 'In Picture',
        title: 'A fun English learning game for kids (ages 6-10)',
        desc: '"In Picture" is a nice animated learing English game for kids, each time an image is presented with 2 option - only 1 is correct, open the game now to enjoy and even learn some English!',
        url: "https://eyalskl.github.io/In-Picture/",
        publishedAt: 'May 2020',
        labels: ["Learning", "Trivia"],
    },
    {
        id: 'ball-board',
        name: 'Ball Board',
        title: 'This game will sweep you of your feet, Gotta Catch em All!',
        desc: 'Start playing this crazy and fun game now, enjoy 4 difficulty levels - easy, medium, hard and IMPOSIBLE(really imposible... iv\'e tried...), Try it now and explore this amazing game in all it\'s glory! Enjot :)',
        url: "https://eyalskl.github.io/Ball-Board/",
        publishedAt: 'May 2020',
        labels: ["Web Games", "Addictive"],
    },
    {
        id: 'pacman',
        name: 'PACMAN',
        title: 'Pacman - one of the mose loved games throughout hisotry!',
        desc: 'Pac-Man is an arcade game that was first release in 1980. The player navigates Pac-Man through a maze and has to collect all the dots (Pac-Dots) in order to complete the stage. Pac-Man is being chased by four ghosts in the game whose main objective is to kill him.',
        url: "https://eyalskl.github.io/PACMAN/",
        publishedAt: 'May 2020',
        labels: ["Web Games", "Fun"],
    },
    {
        id: 'balloons',
        name: 'Pop The Balloons',
        title: 'Pacman - one of the mose loved games throughout hisotry!',
        desc: 'Pac-Man is an arcade game that was first release in 1980. The player navigates Pac-Man through a maze and has to collect all the dots (Pac-Dots) in order to complete the stage. Pac-Man is being chased by four ghosts in the game whose main objective is to kill him.',
        url: "https://eyalskl.github.io/Pop-The-Ballons/",
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
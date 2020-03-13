import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './motion-ui.css';
import './main.css';
import * as serviceWorker from './serviceWorker';
import img1 from './img/ttt5.jpg'; import img2 from './img/guildball.jpg';import img3 from './img/sitonchair.jpg';
import img4 from './img/oldCV.jpg'; import img5 from './img/mailing_pod_chmurami.jpg';
const projectInfeed = [
    {
        text: 'Tic-tac-toe game using jQuery. But with a twist, in primary school I realised classic game with three fields gives no true way of actually playing, so me and my friend made a "expanded" version of this game. Click on picture for live example, or description fo github repo.                    ',
        img: img1,
        url: 'https://github.com/GrzesiekKozdroj/tic-tac-toe-5',
        urlExample: 'https://grzesiekkozdroj.github.io/tic-tac-toe-5/',
        alt: 'picture of a tic tac toe game',
    },
    {
        text: 'Work In Progress. This is probably the first attempt at converting physical tabletop game - Guild Ball into jQuery, JavaScript and HTML canvas game. Intention is to make interface that allows players to enjoy the game while also limiting their manuverability to what is legal rules wise.                    ',
        img: img2,
        url: 'https://github.com/GrzesiekKozdroj/gimball',
        urlExample: 'https://grzesiekkozdroj.github.io/gimball/',
        alt: 'picture of a Guild Ball game',
    },
    {
        text: 'Bootcamp project with Pixel Perfect and basic HTML & CSS. Very simple and out of date mock up shop that sells chairs. Click on picture for live example, or description fo github repo.                    ',
        img: img3,
        url: 'https://github.com/GrzesiekKozdroj/Sit-On-Chair-Web-Page',
        urlExample: 'https://grzesiekkozdroj.github.io/Sit-On-Chair-Web-Page/',
        alt: 'picture of a online store page shop selling chairs',
    },
    {
        text: 'Old CV of mine, static and classic, but still functional, I had fun using react while developing it. Click on picture for live example, or description fo github repo.                    ',
        img: img4,
        url: 'https://github.com/GrzesiekKozdroj/Grzesiek-Kozdroj-Resume',
        urlExample: 'https://grzesiekkozdroj.github.io/Grzesiek-Kozdroj-Resume/',
        alt: 'picture of my old portfolio',
    },
    {
        text:'Mailing example we have done as a workshop durning Coders Lab course. Click on picture for live example, or description fo github repo.                    ',
        img:img5,
        url:'https://github.com/GrzesiekKozdroj/Coders-Lab-Workshop-Mailing',
        urlExample:'https://grzesiekkozdroj.github.io/Coders-Lab-Workshop-Mailing/',
        alt:'github workshop mailing',
    },
    // {
    //     text:'',
    //     img:require(''),
    //     url:'',
    //     urlExample:'',
    //     alt:'',
    // }
]



ReactDOM.render(<App projectInfeed={projectInfeed} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

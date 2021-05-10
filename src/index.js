//npm start to start
//npm run build to compile
//npm run deploy to deeploy
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './motion-ui.css';
import './main.css';
import * as serviceWorker from './serviceWorker';
import img1 from './img/ttt5.jpg'; import img2 from './img/guildball.jpg';import img3 from './img/sitonchair.jpg';
import img4 from './img/oldCV.jpg'; import img5 from './img/mailing_pod_chmurami.jpg'; import img6 from './img/mern.jpg';
import img7 from './img/tech-doc.png'; import img8 from './img/fractal.png'; import img9 from './img/todos.png';
import img10 from './img/forum.png';
import img11 from './img/Godtear.png';
import img12 from './img/rusersapp.png';
const longWait = '                                                                                                                        ';
const projectInfeed = [
    {
        text: 'Tic-tac-toe game using jQuery. But with a twist, in primary school I realised classic game with three fields gives no true way of actually playing, so me and my friend made a "expanded" version of this game. Click on picture for live example, or description fo github repo.' + longWait,
        img: img1,
        url: 'https://github.com/GrzesiekKozdroj/tic-tac-toe-5',
        urlExample: 'https://grzesiekkozdroj.github.io/tic-tac-toe-5/',
        alt: 'picture of a tic tac toe game',
    },
    {
        text: 'Work In Progress. This is probably the first attempt at converting physical tabletop game - Guild Ball into jQuery, JavaScript and HTML canvas game. Intention is to make interface that allows players to enjoy the game while also limiting their manuverability to what is legal rules wise.' + longWait,
        img: img2,
        url: 'https://github.com/GrzesiekKozdroj/gimball',
        urlExample: 'https://grzesiekkozdroj.github.io/Guild-Ball/',
        alt: 'picture of a Guild Ball game',
    },
    {
        text: 'Bootcamp project with Pixel Perfect and basic HTML & CSS. Very simple and out of date mock up shop that sells chairs. Click on picture for live example, or description fo github repo.' + longWait,
        img: img3,
        url: 'https://github.com/GrzesiekKozdroj/Sit-On-Chair-Web-Page',
        urlExample: 'https://grzesiekkozdroj.github.io/Sit-On-Chair-Web-Page/',
        alt: 'picture of a online store page shop selling chairs',
    },
    {
        text: 'Old CV of mine, static and classic, but still functional, I had fun using react while developing it. Click on picture for live example, or description fo github repo.' + longWait,
        img: img4,
        url: 'https://github.com/GrzesiekKozdroj/Grzesiek-Kozdroj-Old_CV/',
        urlExample: 'https://grzesiekkozdroj.github.io/Grzesiek-Kozdroj-Old_CV/',
        alt: 'picture of my old portfolio',
    },
    {
        text:'Mailing example we have done as a workshop durning Coders Lab course. Click on picture for live example, or description fo github repo.' + longWait,
        img:img5,
        url:'https://github.com/GrzesiekKozdroj/Coders-Lab-Workshop-Mailing',
        urlExample:'https://grzesiekkozdroj.github.io/Coders-Lab-Workshop-Mailing/',
        alt:'github workshop mailing',
    },
    {
        text:"Created simple server, this was just an exercise to help me understand better how to create database and connect it with self-written server and send that data to front-end with options to add, edit and delete." + longWait,
        img:img6,
        url:'https://github.com/GrzesiekKozdroj/MERN-stack-first-learning-project',
        urlExample:'https://github.com/GrzesiekKozdroj/MERN-stack-first-learning-project',
        alt:'M_E_R_N',
    },
    {
        text:'Mockup of a teachnical documentation page, project was requiered by freeCodeCamp to complete one of their courses. It uses none of fancy new web techologies, it does not need them.' + longWait,
        img:img7,
        url:'https://github.com/GrzesiekKozdroj/technical-documentation',
        urlExample:'https://grzesiekkozdroj.github.io/technical-documentation/',
        alt:'technical documentation',
    },
    {
        text:'I wondered why there are no awesome infinitely zooming in fractals out there untill I tried to make my own and got crushed by how long it take to generate just one frame. Here is a fine example of this obstacle. I will try to optimise it though. This project is just too trippy.' + longWait,
        img:img8,
        url:'https://github.com/GrzesiekKozdroj/mandelbrot-react-SLOW',
        urlExample:'https://grzesiekkozdroj.github.io/mandelbrot-react-SLOW/',
        alt:'mandelbrot fractal',
    },
    {
        text:'Simple to do list exercise with react and ability to invoke its events' + longWait,
        img:img9,
        url:'https://github.com/GrzesiekKozdroj/to_do_list-react',
        urlExample:'https://grzesiekkozdroj.github.io/to_do_list-react/',
        alt:'to do list',
    },
    {
        text:"Simple react exercise with use of router. Posts won't load though, not until one of the links in the navbar isn't visited, I need to look at way data is requested."+longWait,
        img:img10,
        url:'https://github.com/GrzesiekKozdroj/forum-mockup',
        urlExample:'https://grzesiekkozdroj.github.io/forum-mockup/',
        alt:'forum mock up',
    },
    {
        text:'Godtear is board game invented by SFG, this project is accurate replica of physical board game made into JavaScript, live on heroku, its a multiplayer pvp board game utilising jQuery, socket.io, express and node.js' + longWait,
        img:img11,
        url:'https://github.com/GrzesiekKozdroj/pGodtear',
        urlExample:'https://godtear.herokuapp.com/',
        alt:'Godtear game',
        
    },
    {
        text:'In this exercise project, I learned how I can use React, Redux and Node together to create a simple application that consumes API from https://randomuser.me/' + longWait,
        img:img12,
        url:'https://github.com/GrzesiekKozdroj/react-project-users-list-full-stack',
        urlExample:'https://larhendiel-rng-user-app.herokuapp.com/',
        alt:'random user application',
    },
    
    // {
    //     text:'' + longWait,
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

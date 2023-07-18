import html from "../images/html.png";
import css from "../images/cssnew.png";
import js from "../images/jsnew.png";
import react from "../images/recatnew.png";
import node from "../images/nodenew.png";
import api from "../images/apinew.png";
import git from "../images/githubnew.png";
import mongo from "../images/mongonew.png";

//images
import array from "../project_img/array.png";
import calculator from "../project_img/calculator.png";
import currency from "../project_img/currency-exchange.png";
import digital from "../project_img/digital.png";
import expence from "../project_img/expence.png";
import form from "../project_img/form.png";
import guess from "../project_img/guess.png";
import imageCarosal from "../project_img/image-carosal.png";
import pig from "../project_img/pig.png";
import pomodora from "../project_img/pomodora.png";
import quiz from "../project_img/quiz.png";
import rock from "../project_img/rock.png";
import tictactoe from "../project_img/tictactoe.png";
import tip from "../project_img/tip.png";
import virtual from "../project_img/virtual.png";
import weather from "../project_img/array.png";
//react
import fylo from "../project_img/fylo.png";
import backroads from "../project_img/backroads.png";
//end

export const navLink = [
  { id: 1, href: "#home", text: "Home", itemClass: "nav-link" },
  { id: 2, href: "#about", text: "About", itemClass: "nav-link" },
  { id: 3, href: "#skill", text: "Skills", itemClass: "nav-link" },
  { id: 4, href: "#project", text: "Project", itemClass: "nav-link" },
  { id: 5, href: "#contact", text: "Contact Us", itemClass: "nav-link" },
];

export const tech = [
  {
    id: 1,
    href: "https://www.google.com/search?q=html5&rlz=1C1CHBF_enIN1055IN1055&oq=html&aqs=chrome.0.69i59l2j69i57j69i64j69i59j69i60l3.2472j0j4&sourceid=chrome&ie=UTF-8",
    text: "html",
    icon: html,
    itemClass: "img",
  },
  {
    id: 2,
    href: "https://www.google.com/search?q=css&rlz=1C1CHBF_enIN1055IN1055&oq=css&aqs=chrome.0.69i59l3j69i64j0i131i433i512j69i60l3.1091j0j9&sourceid=chrome&ie=UTF-8",
    text: "css",
    icon: css,
    itemClass: "img",
  },
  {
    id: 3,
    href: "https://javascript.info/",
    text: "js",
    icon: js,
    itemClass: "img",
  },
  {
    id: 4,
    href: "https://react.dev/",
    text: "react",
    icon: react,
    itemClass: "img",
  },
  {
    id: 5,
    href: "https://nodejs.org/en/docs/guides",
    text: "node",
    icon: node,
    itemClass: "img",
  },
  {
    id: 6,
    href: "https://www.google.com/search?q=api&rlz=1C1CHBF_enIN1055IN1055&oq=api&aqs=chrome.0.69i59l2j0i433i512j0i131i433i512j0i20i263i512j46i131i199i433i465i512j0i512j0i131i433i512l3.1089j0j4&sourceid=chrome&ie=UTF-8",
    text: "api",
    icon: api,
    itemClass: "img",
  },
  {
    id: 7,
    href: "https://www.mongodb.com/",
    text: "mongo",
    icon: mongo,
    itemClass: "img",
  },
  {
    id: 8,
    href: "https://github.blog/",
    text: "git",
    icon: git,
    itemClass: "img",
  },
];

export const jsProject = [
  {
    id: 1,
    gitHub: "https://github.com/Vinoth30457/rock-paper-scissors-master.git",
    netlify: "https://incandescent-cajeta-cfdaa4.netlify.app",
    text: "Rock Paper Scissors",
    image: rock,
  },
  {
    id: 2,
    gitHub: "https://github.com/Vinoth30457/currency-exchange.git",
    netlify: "https://tiny-cascaron-581ec0.netlify.app",
    text: "Currency Exchange",
    image: currency,
  },
  {
    id: 3,
    gitHub: "https://github.com/Vinoth30457/pomodora-clock.git",
    netlify: "https://shiny-malabi-ec8e13.netlify.app",
    text: "Pomodoro Clock",
    image: pomodora,
  },
  {
    id: 4,
    gitHub: "https://github.com/Vinoth30457/digital-clock.git",
    netlify: "https://majestic-pithivier-08bc12.netlify.app",
    text: "Digital clock",
    image: digital,
  },
  {
    id: 5,
    gitHub: "https://github.com/Vinoth30457/tip-calculator.git",
    netlify: "https://tiny-meringue-f147dc.netlify.app",
    text: "Tip calculator",
    image: tip,
  },
  {
    id: 6,
    gitHub: "https://github.com/Vinoth30457/Pig-Game.git",
    netlify: "https://spectacular-marigold-5cc915.netlify.app",
    text: "Pig Game",
    image: pig,
  },
  {
    id: 7,
    gitHub: "https://github.com/Vinoth30457/Guess-my-number.git",
    netlify: "https://majestic-toffee-44a0a0.netlify.app",
    text: "Guess My number",
    image: guess,
  },
  {
    id: 8,
    gitHub: "https://github.com/Vinoth30457/virtual-keybord.git",
    netlify: "https://visionary-florentine-99bea7.netlify.app",
    text: "Virtual keyboard",
    image: virtual,
  },
  {
    id: 9,
    gitHub: "https://github.com/Vinoth30457/calculator.git",
    netlify: "https://vermillion-fox-182824.netlify.app",
    text: "Calculator Application",
    image: calculator,
  },
  {
    id: 10,
    gitHub: "https://github.com/Vinoth30457/Weather-Application.git",
    netlify: "https://aquamarine-yeot-ad9d14.netlify.app",
    text: "Weather application",
    image: weather,
  },
  {
    id: 11,
    gitHub: "https://github.com/Vinoth30457/image-carousel.git",
    netlify: "https://ephemeral-pithivier-3ca0c4.netlify.app",
    text: "Image carousel",
    image: imageCarosal,
  },
  {
    id: 12,
    gitHub: "https://github.com/Vinoth30457/Expense-Tracker.git",
    netlify: "https://eloquent-rolypoly-0cb25b.netlify.app",
    text: "Expense tracker",
    image: expence,
  },
  {
    id: 13,
    gitHub: "https://github.com/Vinoth30457/form-validation.git",
    netlify: "https://joyful-pothos-edf523.netlify.app",
    text: "Form validation Project",
    image: form,
  },
  {
    id: 14,
    gitHub: "https://github.com/Vinoth30457/tic-tac-toe.git",
    netlify: "https://bucolic-unicorn-a9099a.netlify.app",
    text: " Tic Tac Toe",
    image: tictactoe,
  },
  {
    id: 15,
    gitHub: "https://github.com/Vinoth30457/quiz-app.git",
    netlify: "https://quiet-yeot-cb6fa3.netlify.app",
    text: "Quiz App",
    image: quiz,
  },
  {
    id: 16,
    gitHub: "https://github.com/Vinoth30457/Array-methods---HOF.git",
    netlify: "https://statuesque-croquembouche-f58f98.netlify.app",
    text: "Array methods on HOF",
    image: array,
  },
];

export const reactProject = [
  {
    id: 1,
    gitHub: "https://github.com/Vinoth30457/backroads.git",
    netlify: " https://tiny-vacherin-f53f9b.netlify.app",
    text: "Back roads",
    image: fylo,
  },
  {
    id: 2,
    gitHub: "https://github.com/Vinoth30457/fylo-landing-page.git",
    netlify: "https://grand-profiterole-3aecab.netlify.app/",
    text: "Fylo landling page",
    image: backroads,
  },
];

export const socialLink = [
  {
    id: 1,
    icon: "fa-brands fa-instagram",
    href: "https://instagram.com/lovely_vinoth____?igshid=MzNlNGNkZWQ4Mg==",
  },
  {
    id: 2,
    icon: "fa-brands fa-github",
    href: "https://github.com/Vinoth30457",
  },
  {
    id: 3,
    icon: "fa-brands fa-linkedin",
    href: "https://www.linkedin.com/in/vinoth-kumar-306018229",
  },
];

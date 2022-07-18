const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const GameView = require("./game_view.js");


window.MovingObject = MovingObject;

const canvas = document.getElementById("game-canvas");
const view = new GameView(canvas);

window.addEventListener('DOMContentLoaded', () => {
    view.start();
});



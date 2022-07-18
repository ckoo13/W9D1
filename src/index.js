const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");

window.MovingObject = MovingObject;

const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

const ast = new Asteroid({
    pos: [50, 50]});

window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    mo.draw(ctx);
    ast.draw(ctx);
});



const Asteroid = require("./asteroid.js");
const MovingObject = require("./moving_object.js");
const Util = require("./utils.js")

function Game(ctx) {
    this.DIM_X = ctx.width
    this.DIM_Y = ctx.height 
    this.NUM_ASTEROIDS = 10;
    this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
    this.asteroids = [];

    for (let i = 0; i < this.NUM_ASTEROIDS; i++){
        const ast = new Asteroid(this.randomPosition());
        this.asteroids.push(ast);
    }
}

Game.prototype.randomPosition = function() {
    const x = Math.random() * this.DIM_X;
    const y = Math.random() * this.DIM_Y;
    const options = {pos: [x,y]};

    return options;
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

    for(let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].draw(ctx);
    }
}

Game.prototype.moveObjects = function() {
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].move();
    }
}


module.exports = Game;
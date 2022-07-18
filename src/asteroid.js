const MovingObject = require("./moving_object");
const Util = require("./utils");

function Asteroid(options) {
    options.color = "grey";
    options.radius = 20;
    options.pos = options.pos;
    options.vel = Util.randomVec(1);

    MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;

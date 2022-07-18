const Game = require("./game.js");

function GameView(ctx) {
    this.ctx = ctx.getContext("2d");
    this.game = new Game(ctx);
}

GameView.prototype.start = function() {
    debugger;
    setInterval(this.game.moveObjects(), 2000);
    setInterval(this.game.draw(this.ctx), 2000);
}


module.exports = GameView;
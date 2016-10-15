var Game = function (elementId) {
    var players = [];
    for (var i = 0; i < 1; i++) {
        players.push(new Player('Travis', 'dog'));
    }
    var gameEl = document.getElementById(elementId)

    var board = new Board();
    board.render(gameEl);
}

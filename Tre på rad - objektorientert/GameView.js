class GameView {
    constructor(game) {
        this._game = game;
        this._divBoard = document.getElementById('game');
        let cells = game.getCells();
        //this._cellView = cells.map(function (cell) { return new CellView(cell) });
        this._cellViews = cells.map(cell => new CellView(cell));

        //for(var i = 0; < i cells.length)
        //for (var i in cells) {
        //    this._cellView.push(new CellView(cell));
        //}
    }

    show() {
        //var html = '';
        //for (var i in this._cellViews) {
        //    var cellView = this._cellView[i];
        //    html += cellView.getHtml();
        //}
        let boardHtml = this._cellViews.reduce(
            (html, cellView) => html + cellView.getHtml(), '');
        let winnerHtml = '';
        if (this._game.isStopped()) {
            winnerHtml = '<h3 id="info">' +
                this._game.getWinner() +
                ' vant!</h3>' +
                '<a id="link" href= "javascript:gameController.restart();">Klikk her for å starte på nytt!</a><br/>';
        }

        this._divBoard.innerHTML = winnerHtml + boardHtml;
    }
}
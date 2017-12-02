class DiceSetView {
    constructor(diceSet, diceDivId) {
        let dice = diceSet.getDice();
        this._diceViews = [
            new DiceView(dice[0], 0),
            new DiceView(dice[1], 1),
            new DiceView(dice[2], 2),
            new DiceView(dice[3], 3),
            new DiceView(dice[4], 4),
        ];
        this._divElement = document.getElementById(diceDivId);
    }

    show() {
        var html = this._diceViews[0].getHtml()
            + this._diceViews[1].getHtml()
            + this._diceViews[2].getHtml()
            + this._diceViews[3].getHtml()
            + this._diceViews[4].getHtml();
        html += '<p><button onclick= "throwDice()" > Kast terningene!</button ></p>';
        this._divElement.innerHTML = html;
    }
}

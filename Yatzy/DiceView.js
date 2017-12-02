class DiceView {
    constructor(dice, index) {
        this._dice = dice;
        this._index = index;
    }

    getHtml() {
        let value = this._dice.getValue();
        let isHeld = this._dice.isHeld();
        var cssClass = isHeld ? 'diceHeld' : '';
        var html = '<svg width= "100" height= "100" viewBox= "0 0 140 140" '
            + 'onclick= "toggleDice(' + this._index + ')" '
            + ' class="' + cssClass + '">'
            + '<rect x="5" y="5" rx="20" ry="20" width="130" height="130" />';

        if (value > 1) html += '<circle cx= "30" cy= "30" r= "13" />';
        if (value > 3) html += '<circle cx="110" cy="30" r="13" />';
        if (value === 6) html += '<circle cx="30" cy="70" r="13" />';
        if (value % 2 === 1) html += '<circle cx="70" cy="70" r="13" />';
        if (value === 6) html += '<circle cx="110" cy="70" r="13" />';
        if (value > 3) html += '<circle cx="30" cy="110" r="13" />';
        if (value > 1) html += '<circle cx="110" cy="110" r="13" />';
        html += '</svg >';
        return html;
    }
}
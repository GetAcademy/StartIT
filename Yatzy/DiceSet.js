class DiceSet {
    constructor() {
        this._throwCount = 0;
        this._dice = [
            new Dice(),
            new Dice(),
            new Dice(),
            new Dice(),
            new Dice(),
        ];
    }

    getDice() {
        return this._dice;
    }

    throw() {
        if (this._throwCount >= 3) return;
        this._throwCount++;
        for (var i in this._dice) {
            this._dice[i].throw();
        }
    }

    toggle(index) {
        if (this._throwCount === 0) return;
        this._dice[index].toggle();
    }
}
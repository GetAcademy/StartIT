class Dice {
    constructor() {
        this._value = 6;
        this._isHeld = false;
    }

    throw() {
        if (!this._isHeld) {
            this._value = Math.floor(Math.random() * 6) + 1;
        }
    }

    isHeld() {
        return this._isHeld;
    }

    hold() {
        this._isHeld = true;
    }

    toggle() {
        this._isHeld = !this._isHeld;
    }

    getValue() {
        return this._value;
    }
}
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}
class GuessingGame {
    constructor() {
        this.range = {min: 0, max: 0}
        this.lastOut = 0
    }

    setRange(min, max) {
        this.range.max = max
        this.range.min = min
    }

    guess() {
        this.lastOut = this.range.min + Math.ceil((this.range.max - this.range.min) / 2)
        return this.lastOut
    }

    lower() {
        this.range.max = this.lastOut
    }

    greater() {
        this.range.min = this.lastOut
    }
}

module.exports = GuessingGame;

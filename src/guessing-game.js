class GuessingGame {
    constructor() {
        
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }     

    guess() {
        return Math.round((this.min + this.max)/2)
        console.log("otvet"+this.guess)
    }

    lower() {
        this.max = Math.round((this.min + this.max)/2)
        Math.round((this.min + this.max)/2)
        console.log("test lower"+this.max)
    }

    greater() {
        this.min = Math.round((this.min + this.max)/2)
        Math.round((this.min + this.max)/2)
        console.log("test greater"+this.min)
    }
}


module.exports = GuessingGame;

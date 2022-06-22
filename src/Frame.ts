import {doABowl} from "./utils";

const MAX_PINS = 10;

export class Frame {

    pinsCount = MAX_PINS;
    bowlResults: number[] = [];

    get value(): number {
        return this.bowlResults.reduce((sum, result) => sum + result, 0);
    }

    get isStrike(): boolean {
        return this.bowlResults.length >= 1 && this.bowlResults[0] == MAX_PINS;
    }

    get isSpare(): boolean {
        return this.bowlResults.length >= 2 && (this.bowlResults[0] + this.bowlResults[1]) == MAX_PINS;
    }

    updatePins() {
        this.pinsCount = MAX_PINS;
    }

    doABowl() {

        if (this.pinsCount <= 0) return;

        let knockedDownCount = doABowl(this.pinsCount);

        this.bowlResults.push(knockedDownCount);
        this.pinsCount -= knockedDownCount;

    }

}

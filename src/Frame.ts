import {doABowl} from "./utils";

export class Frame {

    private pinsCount = 10;
    private bowlResults: number[] = [];

    get value(): number {
        return 0;
    }

    get isStrike(): boolean {
        return this.bowlResults.length >= 1 && this.bowlResults[0] == 10;
    }

    get isSpare(): boolean {
        return this.bowlResults.length >= 2 && (this.bowlResults[0] + this.bowlResults[1]) == 10
    }

    doABowl() {

        if (this.pinsCount <= 0) return;

        let knockedDownCount = doABowl(this.pinsCount);

        this.bowlResults.push(knockedDownCount);
        this.pinsCount -= knockedDownCount;

    }

}

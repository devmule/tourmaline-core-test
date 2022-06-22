import {doABowl} from "./utils";

const MAX_PINS = 10;


function getNextBowlResult(frame: Frame, bowlIndex: number): number {

    if (frame.bowlResults.length > bowlIndex) {
        return frame.bowlResults[bowlIndex]
    }

    let next = frame.getNextFrame();
    if (next == null) return 0;

    return getNextBowlResult(next, bowlIndex - frame.bowlResults.length);

}

export class Frame {

    private _nextFrame: Frame | null = null;
    pinsCount = MAX_PINS;
    bowlResults: number[] = [];

    setNextFrame(nextFrame: Frame | null) {
        this._nextFrame = nextFrame;
    }

    getNextFrame() {
        return this._nextFrame;
    }

    get value(): number {

        if (this.isStrike) {
            // strike becomes from one bowl, indexed by 0, so 1 and 2 are next
            let bowl1 = getNextBowlResult(this, 1);
            let bowl2 = getNextBowlResult(this, 2);
            return MAX_PINS + Math.min(20, bowl1 + bowl2);
        }

        if (this.isSpare) {
            // spare becomes from two bowls, indexed by 0 and 1, so 2 is next
            let bowl2 = getNextBowlResult(this, 2);
            return MAX_PINS + Math.min(10, bowl2);
        }

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

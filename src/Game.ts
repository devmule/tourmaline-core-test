import {Frame} from "./Frame";

const FRAMES_COUNT = 10;

export class Game {

    readonly frames: Frame[] = [];

    constructor() {

        let prevFrame: Frame | null = null;
        for (let i = 0; i < FRAMES_COUNT; i++) {
            let frame = new Frame();
            this.frames.push(frame);
            prevFrame?.setNextFrame(frame);
            prevFrame = frame;
        }

    }

    play() {
        for (let i = 0; i < this.frames.length; i++) {
            let frame = this.frames[i];
            //frame.
        }
    }

    get totalScore(): number {
        return this.frames.reduce((sum, frame) => sum + frame.value, 0);
    }

}

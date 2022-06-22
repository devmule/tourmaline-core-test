import {Frame} from "./Frame";

const FRAMES_COUNT = 10;

export class Game {

    readonly frames: Frame[] = [];

    constructor() {

        for (let i = 0; i < FRAMES_COUNT; i++) {
            this.frames.push(new Frame());
        }

    }

    play() {
    }

    get totalScore(): number {
        return this.frames.reduce((sum, frame) => sum + frame.value, 0);
    }

}

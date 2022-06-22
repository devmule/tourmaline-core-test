/**
 * @description returns random integer value between [0, pinsCount]
 * */
export function doABowl(pinsCount: number): number {
    return Math.floor(Math.random() * (pinsCount + 1));
}

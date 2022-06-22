import {expect} from 'chai';
import * as utils from "./utils"

describe('utils test', () => {

    it('doABowl function', () => {

        for (let i = 0; i < 20; i++) {
            let pinsCount = Math.floor(Math.random() * 11); // [0 - 10]
            let knockedDownCount = utils.doABowl(pinsCount);
            expect(knockedDownCount).to.be.lessThanOrEqual(pinsCount).and.to.be.greaterThanOrEqual(0);
        }

    });

});

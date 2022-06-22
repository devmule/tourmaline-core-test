import {expect} from 'chai';
import {Frame} from "./Frame";

describe('Frame test', () => {

    it('get value', () => {

        let frame = new Frame();
        frame.bowlResults = [2, 4];
        expect(frame.value).to.be.equal(6);

    });

    it('check for strike', () => {

        let frame = new Frame();

        frame.bowlResults = [10];
        expect(frame.isStrike).to.be.true;

        frame.bowlResults = [10, 1];
        expect(frame.isStrike).to.be.true;

        frame.bowlResults = [5];
        expect(frame.isStrike).to.be.false;

        frame.bowlResults = [7, 3];
        expect(frame.isStrike).to.be.false;

        frame.bowlResults = [];
        expect(frame.isStrike).to.be.false;

    });

    it('check for spare', () => {

        let frame = new Frame();

        frame.bowlResults = [3, 7];
        expect(frame.isSpare).to.be.true;

        frame.bowlResults = [2, 8];
        expect(frame.isSpare).to.be.true;

        frame.bowlResults = [10];
        expect(frame.isSpare).to.be.false;

        frame.bowlResults = [7, 2];
        expect(frame.isSpare).to.be.false;

        frame.bowlResults = [3];
        expect(frame.isSpare).to.be.false;

        frame.bowlResults = [];
        expect(frame.isSpare).to.be.false;

    });

});

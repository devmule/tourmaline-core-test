import {expect} from 'chai';
import {Game} from "./Game";

describe('Game test', () => {

    it('get total score', () => {

        let game = new Game();
        expect(game.totalScore).to.be.equal(17);

    });

});

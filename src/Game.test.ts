import {expect} from 'chai';
import {Game} from "./Game";

describe('Game test', () => {

    it('get total score', () => {

        let game = new Game();
        expect(game.totalScore).to.be.equal(0);

        game.frames[0].bowlResults = [10];
        game.frames[1].bowlResults = [7, 3];
        game.frames[2].bowlResults = [7, 2];
        game.frames[3].bowlResults = [9, 1];
        game.frames[4].bowlResults = [10];
        game.frames[5].bowlResults = [10];
        game.frames[6].bowlResults = [10];
        game.frames[7].bowlResults = [2, 3];
        game.frames[8].bowlResults = [6, 4];
        game.frames[9].bowlResults = [7, 3, 3];

        expect(game.totalScore).to.be.equal(168);

    });

});

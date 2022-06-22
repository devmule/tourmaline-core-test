import {expect} from 'chai';
import {Game} from "./Game";

describe('Game test', () => {

    it('get total score', () => {

        let game = new Game();
        expect(game.totalScore).to.be.equal(0);

        game.frames[0].bowlResults = [10];
        expect(game.totalScore).to.be.equal(10);

        game.frames[1].bowlResults = [7];
        expect(game.totalScore).to.be.equal(24);

        game.frames[1].bowlResults = [7, 3];
        expect(game.totalScore).to.be.equal(30);

        game.frames[2].bowlResults = [7];
        expect(game.totalScore).to.be.equal(44);

        game.frames[2].bowlResults = [7, 2];
        expect(game.totalScore).to.be.equal(46);

        game.frames[3].bowlResults = [9, 1];
        game.frames[4].bowlResults = [10];
        expect(game.totalScore).to.be.equal(76);

        game.frames[5].bowlResults = [10];
        game.frames[6].bowlResults = [10];
        expect(game.totalScore).to.be.equal(126);

        game.frames[7].bowlResults = [2, 3];
        expect(game.totalScore).to.be.equal(138);

        game.frames[8].bowlResults = [6, 4];
        game.frames[9].bowlResults = [7, 3];
        expect(game.totalScore).to.be.equal(165);

        game.frames[9].bowlResults = [7, 3, 3];
        expect(game.totalScore).to.be.equal(168);

    });

});

///<reference path="utils/resources.ts"/>
///<reference path="../lib/phaser.d.ts"/>
///<reference path="states/MainMenuState.ts"/>

module mifik.smath {
    export class Game {
        game:Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {create: this.create, preload: this.preload})
        }

        preload() {
            this.game.load.image("background", "res/img/back.jpg");

        }

        create() {
            this.game.state.add("MainMenuState", mifik.smath.MainMenuState, true);

            this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

        }


    }
}

window.onload = () => {
    var game = new mifik.smath.Game();
};
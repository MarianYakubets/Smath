///<reference path="utils/resources.ts"/>
///<reference path="../lib/phaser.d.ts"/>
///<reference path="states/MainMenuState.ts"/>

module mifik.smath {
    export class Game {
        game:Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(480, 620, Phaser.AUTO, 'content', {create: this.create, preload: this.preload})
        }

        preload() {
            this.game.load.image("background", "res/img/back.jpg");
            this.game.load.image("square", "res/img/square.png");
            this.game.load.image("blink", "res/img/blink.png");
        }

        create() {
            this.game.state.add("MainMenuState", mifik.smath.MainMenuState, true);

            this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;

        }


    }
}

window.onload = () => {
    var game = new mifik.smath.Game();
};
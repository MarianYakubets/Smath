///<reference path="../utils/resources.ts"/>
///<reference path="../../lib/phaser.d.ts"/>
module  mifik.smath {
    export class MainMenuState extends Phaser.State {
        game:Phaser.Game;

        constructor(){
            super();
        }

        private background:Phaser.Sprite;

        preload() {

        }

        create() {
            this.background = this.add.sprite(0, 0, "background");
            this.background.scale.setTo(this.game.width / this.background.width, this.game.height / this.background.height);
        }
    }

}
///<reference path="../utils/resources.ts"/>
///<reference path="../../lib/phaser.d.ts"/>
module  mifik.smath {
    export class MainMenuState extends Phaser.State {
        game:Phaser.Game;

        constructor(){
            super();
        }

        preload() {

        }

        create() {
            this.game.stage.setBackgroundColor(0xfbf6d5);

            var text = this.add.text(this.game.world.centerX, 250, 'Start');
            text.anchor.set(0.5);
            text.align = 'center';

            text.font = 'Arial Black';
            text.fontSize = 40;
            text.fontWeight = 'bold';
            text.fill = '#ec008c';
            this.input.onTap.addOnce(this.titleClicked, text);


        }

        titleClicked(){
            this.game.state.start("GameState");
        }
    }

}
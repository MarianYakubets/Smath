///<reference path="../utils/resources.ts"/>
///<reference path="../../lib/phaser.d.ts"/>
module  mifik.smath {
    export class GameState extends Phaser.State {
        game:Phaser.Game;
        private map:Phaser.Tilemap;
        private layer;
        private currentTile;
        private marker:Phaser.Graphics;

        constructor() {
            super();
        }

        preload() {
        }

        create() {
            this.game.stage.setBackgroundColor(0xfbf6d5);

            this.map = this.game.add.tilemap();
            this.map.addTilesetImage('ground_1x1');

            this.layer = this.map.create('level1', 40, 30, 32, 32);
            this.layer.scrollFactorX = 0.5;
            this.layer.scrollFactorY = 0.5;

            //  Resize the world
            this.layer.resizeWorld();

            this.createTileSelector();

            this.game.input.addMoveCallback(this.updateMarker, this);


        }

        pickTile(sprite, pointer) {

            this.currentTile = this.game.math.snapToFloor(pointer.x, 32) / 32;

        }
        updateMarker() {

            this.marker.x = this.layer.getTileX(this.game.input.activePointer.worldX) * 32;
            this.marker.y = this.layer.getTileY(this.game.input.activePointer.worldY) * 32;

            if (this.game.input.mousePointer.isDown) {
                this.map.putTile(this.currentTile, this.layer.getTileX(this.marker.x), this.layer.getTileY(this.marker.y), this.layer);
                // map.fill(currentTile, currentLayer.getTileX(marker.x), currentLayer.getTileY(marker.y), 4, 4, currentLayer);
            }

        }

        private createTileSelector():void {

            //  Our tile selection window
            var tileSelector = this.game.add.group();

            var tileSelectorBackground = this.game.make.graphics();
            tileSelectorBackground.beginFill(0x000000, 0.5);
            tileSelectorBackground.drawRect(0, 0, 800, 34);
            tileSelectorBackground.endFill();

            tileSelector.add(tileSelectorBackground);

            var tileStrip = tileSelector.create(1, 1, 'ground_1x1');
            tileStrip.inputEnabled = true;
            tileStrip.events.onInputDown.add(this.pickTile, this);

            tileSelector.fixedToCamera = true;

            //  Our painting marker
            this.marker = this.game.add.graphics();
            this.marker.lineStyle(2, 0x000000, 1);
            this.marker.drawRect(0, 0, 32, 32);

        }
    }

}
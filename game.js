// We no longer add the scene to the config
var config = { 
	type: Phaser.AUTO,
    width: 800,
    heigth: 640,
    physics: { 
      default: 'arcade', 
        arcade: { 
          gravity: { y: 0 }, 
          debug: false
        } 
      }, 
      audio: {
        disableWebAudio: true,
        noAudio: false
    },
  scene: { preload, create, update},
    scale: {
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
};

function preload() {

        

}
function create() {
  cursors = this.input.keyboard.createCursorKeys();

}
function update() {

}

// Our game Object
var game = new Phaser.Game(config);

//---TITLE---------------------------------------
import boot from './stages/boot.js'
import titlescene from './stages/titlescreen.js'
import help from './stages/help.js'
import s1 from './stages/s1.js'
import s2 from './stages/s2.js'
import s3 from './stages/s3.js'
import s4 from './stages/s4.js'
import boss from './stages/boss.js'
import division from './stages/division-screen.js'

import cog from './stages/settings/settings.js'


// load scenes
game.scene.add("boot", boot);
game.scene.add("titlescene", titlescene);
game.scene.add("division", division);

game.scene.add("s1", s1);
game.scene.add("s2", s2);
game.scene.add("s3", s3);
game.scene.add("s4", s4);
game.scene.add("boss", boss);
game.scene.add("help", help)
game.scene.add('cog', cog);

// start title
game.scene.start('boot');

/*

*/
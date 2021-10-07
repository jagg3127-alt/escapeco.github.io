export default class s4 extends Phaser.Scene {

	constructor() {
		super({key:'s4'});
	}

	preload() {
		this.load.image('titleback', 'assets/titleback.jpg');
	}

	create() {
		this.background = this.add.image(windowWidth / 2, widnowHeight / 2, 'titleback');
		this.background.setDisplaySize(windowWidth, widnowHeight);
	
		this.add.image(100,100, 'logo');

		  var text = this.add.text(100,100, 'Welcome to my game!');
	}

}
export default class help extends Phaser.Scene {

	constructor() {
		super({key:'help'});
	}

	create() {
		
		this.titleback = this.add.image(windowWidth / 2, widnowHeight / 2, 'titleback');
		this.titleback.setDisplaySize(windowWidth, widnowHeight);

		this.helf = this.add.image(windowWidth / 2, widnowHeight / 2, 'helf');
		this.helf.setDisplaySize(windowWidth, widnowHeight);

		var back = this.add.image(windowWidth / 1.1, widnowHeight / 9, 'back');
		back.setDisplaySize(windowWidth / 6.5 , widnowHeight / 6.5);
		back.setInteractive({ useHandCursor: true });
		back.on('pointerdown', () => this.Home());
		
	}

	Home(){
		this.scene.switch('titlescene');
	}

}

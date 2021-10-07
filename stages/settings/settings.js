///<reference path="../titlescreen.js" />
///<reference path="../s1.js" />
///<reference path="../s2.js" />
///<reference path="../s3.js" />
///<reference path="../s4.js" />
///<reference path="../boss.js" />

export default class cog extends Phaser.Scene {

	constructor() {
		super({key:'cog'});
	}


    create() {
		
		this.cogbg = this.add.image(windowWidth / 2.05, widnowHeight / 2, 'cogbg');
		this.cogbg.setDisplaySize(windowWidth * 1.05, widnowHeight * 1.2);

		SoundSyst = this.add.text(windowWidth / 2.4, widnowHeight / 1.5, 'Audio');
		SoundSyst.setDisplaySize(windowWidth / 5 , widnowHeight / 6.5);
		SoundSyst.setColor("#330026");
		SoundSyst.setInteractive({ useHandCursor: true });
		SoundSyst.on('pointerdown', () => this.SoundSyst());

		backS = this.add.image(windowWidth / 1.1, widnowHeight / 9, 'back');
		backS.setDisplaySize(windowWidth / 6.5 , widnowHeight / 6.5);
		backS.setInteractive({ useHandCursor: true });
		backS.on('pointerdown', () => this.BackSyst());

		Titleb = this.add.text(windowWidth / 10.5, widnowHeight / 1.25, 'Home');
		Titleb.setDisplaySize(windowWidth / 5.5 , widnowHeight / 5.5);
		Titleb.setInteractive({ useHandCursor: true });
		Titleb.on('pointerdown', () => this.HomeSyst());
    }
	HomeSyst(){
		this.scene.switch(map[0]);
	}

	BackSyst(){
		this.scene.switch(map[Syst]);
	}
}
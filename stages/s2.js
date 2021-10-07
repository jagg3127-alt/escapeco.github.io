export default class s2 extends Phaser.Scene {

	constructor() {
		super({key:'s2'});
	}

	
	create() {
		Syst=2;
	//-BG-------------------------------------------------------

		this.background = this.add.image(windowWidth / 2, widnowHeight / 2, 'bg');
		this.background.setDisplaySize(windowWidth, widnowHeight);
		ground = this.physics.add.sprite(windowWidth / 11, widnowHeight, 'ground');
		ground.setDisplaySize(windowWidth, widnowHeight / 5.5)

	//-settings--------------------------------------------------

		cogG = this.add.image(windowWidth / 18, widnowHeight / 9, 'cog');
		cogG.setDisplaySize(windowWidth / 7 , widnowHeight / 7);
		cogG.setInteractive({ useHandCursor: true });
		cogG.on('pointerdown', () => this.HomeSettings());

	//-----scene-------------------------------------------------
	robat = this.physics.add.sprite(windowWidth / 1.5, widnowHeight / 1.5, 'robat');
	robat.setDisplaySize(13, 15);
	robst = this.physics.add.sprite(windowWidth, widnowHeight / 4.5, 'robst');
	robst.setDisplaySize(225, 250);
	player = this.physics.add.sprite(windowWidth / 9.9777777, widnowHeight / 3.5, 'player', 'assets/nonsprites/player/knight.png');
	player.setDisplaySize(225, 250);

		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers('player', { start: '0l1.png', end: '0l.png' }),
			frameRate: 10,
			repeat: 1
		});
		
		this.anims.create({
			key: 'turn',
			frames: [ { key: 'player', frame: '0m4.png' } ],
			frameRate: 20
		});
		
		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('player', { start: '0r5.png', end: '0r6.png' }),
			frameRate: 10,
			repeat: 1
		});
		
		
	}
	update(){
		cursors = this.input.keyboard.createCursorKeys();

		player.setCollideWorldBounds(true);
		robst.setCollideWorldBounds(true);
		ground.setCollideWorldBounds(true);
		player.setImmovable(false);
		robst.setImmovable(true);
		robat.setImmovable(true);
		ground.setImmovable(false);
		robst.setGravityY(300);
		player.setGravityY(1000);
        robat.setCollideWorldBounds(false);
        robat.setVelocityX(-200);
        robat.allowGravity = false;
		robat.setCollideWorldBounds(false);
        robat.setVelocityX(-200);
        robat.allowGravity = false;

		this.physics.add.collider(player, ground);
		this.physics.add.collider(robst, ground);
		this.physics.add.collider(robat, ground);
		this.physics.add.collider(robat, player, H2, null, this);
		
		this.physics.add.overlap(player, robst, H1, null, this);


		if (cursors.left.isDown)
		{
			player.setVelocityX(-440);
	
			player.anims.play('left', true);
		}
		else if (cursors.right.isDown)
		{
			player.setVelocityX(440);
	
			player.anims.play('right', true);
		}
		else
		{
			player.setVelocityX(0);
	
			player.anims.play('turn');
		}
	
		if (cursors.up.isDown && player.body.touching.down)
		{
			player.setVelocityY(-660);
			setTimeout(() => {
				player.setVelocityY(275);

			}, 400);

		}
	}
	


	HomeSettings(){
		this.scene.switch('cog');
	}
	
	
}
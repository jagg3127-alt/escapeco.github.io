export default class s1 extends Phaser.Scene {

	constructor() {
		super({key:'s1'});
	}

	create() {
		Syst=1;
	//-BG-------------------------------------------------------

		this.background = this.add.image(windowWidth / 2, widnowHeight / 2, 'bg');
		this.background.setDisplaySize(windowWidth, widnowHeight);
		ground = this.physics.add.sprite(windowWidth / 11, widnowHeight, 'ground');
		ground.setDisplaySize(windowWidth, widnowHeight / 5.5);

    this.Al = this.add.image(0, widnowHeight / 1.5, 'Al');
    this.Al.setDisplaySize(windowWidth / 7 , widnowHeight / 7);
    this.Al.setInteractive({ useHandCursor: true });
    this.Al.on('pointerdown', () => this.LeftMove());
    
    this.Ar = this.add.image(0,1, 'Ar');
    this.Ar.setDisplaySize(windowWidth / 7 , widnowHeight / 7);
   // this.Ar.setInteractive({ useHandCursor: true });
   // this.Ar.on('pointerdown', () => this.RightMove());
   
	//-settings--------------------------------------------------

		cogG = this.add.image(windowWidth / 18, widnowHeight / 9, 'cog');
		cogG.setDisplaySize(windowWidth / 7 , widnowHeight / 7);
		cogG.setInteractive({ useHandCursor: true });
		cogG.on('pointerdown', () => this.HomeSettings());

	//-----scene-------------------------------------------------
	slima = this.physics.add.sprite(windowWidth / 1.5, widnowHeight / 1.5, 'slime-a');
	slima.setDisplaySize(13, 15);
	slims = this.physics.add.sprite(windowWidth, widnowHeight / 4.5, 'slime-s');
	slims.setDisplaySize(225, 250);
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
		slims.setCollideWorldBounds(true);
		ground.setCollideWorldBounds(true);
		player.setImmovable(false);
		slims.setImmovable(true);
		slima.setImmovable(true);
		ground.setImmovable(false);
		slims.setGravityY(300);
		player.setGravityY(1000);
        slima.setCollideWorldBounds(false);
        slima.setVelocityX(-200);
        slima.allowGravity = false;
		slima.setCollideWorldBounds(false);
        slima.setVelocityX(-200);
        slima.allowGravity = false;

		this.physics.add.collider(player, ground);
		this.physics.add.collider(slims, ground);
		this.physics.add.collider(slima, ground);
		this.physics.add.collider(slima, player, H2, null, this);
		
		this.physics.add.overlap(player, slims, H1, null, this);


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
	

  Rightmove(){
    
  }
  
  Leftmove(){
    player.setVelocityX(-440);
	
		player.anims.play('left', true);
  }
  
	HomeSettings(){
		this.scene.switch('cog');
	}
	
	
	
}
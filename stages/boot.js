export default class boot extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'boot' });
    }

    preload ()
    {
        // load all files necessary for the loading screen

this.load.image('Al', 'assets/Al.jpg');
     
this.load.image('Ar', '../assets/Ar.jpg');
     this.load.image('logo', '../assets/logo.png');
        this.load.image('cat-a', 'assets/catto-a.png');
        this.load.image('cat-s', 'assets/catto-s.png');
        this.load.image('dragon-a', 'assets/dragon-a.png');
        this.load.image('dragon-s', 'assets/dragon-s.gif');
        this.load.image('ghost-a', 'assets/ghost-a.png');
        this.load.image('ghost-s', 'assets/ghost-s.gif');
        this.load.image('robat', 'assets/robot-a.png');
        this.load.image('robst', 'assets/robot-s.png');
        this.load.image('slime-a', 'assets/slime-a.png');
        this.load.image('slime-s', 'assets/slime-s.png');

        this.load.image('white', 'assets/nonsprites/white.jpg')

        this.load.image('back', 'assets/nonsprites/back.png');
        this.load.image('bg', 'assets/nonsprites/bg.png');
        this.load.image('cogbg', 'assets/nonsprites/cogbg.png');
        this.load.image('ground', 'assets/nonsprites/ground.png');
        this.load.image('help', 'assets/nonsprites/help.png');
        this.load.image('helf', 'assets/nonsprites/help2.png');
        this.load.image('play', 'assets/nonsprites/play.png');
        this.load.image('cog', 'assets/nonsprites/settings.png');
        this.load.image('titleback', 'assets/nonsprites/titleback.png');

        this.load.multiatlas('player', 'assets/nonsprites/player/knight.json', 'assets/nonsprites/player/');

    }

    create ()
    {
        this.scene.start('titlescene');
    }
}
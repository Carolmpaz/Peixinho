var config = {
    type:  Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('alga', 'assets/alga.png');
    this.load.image('peixe', 'assets/peixes/tubarao.png');
}


function create() {
    this.add.image(400, 300, 'mar')
    this.add.image(400, 525, 'logo').setScale(0.5);
    this.add.image(675, 575, 'alga').setScale(0.5);
    this.add.image(150, 575, 'alga').setScale(0.5);

    //guardar o peixe em uma variável
    peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5).setFlip(true, false);

    //transformando a variável
    peixinho.setFlip(true, false);
}

function update() {

    //adicionando controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

}


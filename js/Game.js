class Game {
    constructor (){
        this.player1 = new Player(1,'img/x.jpeg');
        this.player2 = new Player(2,'img/o.jpeg');
        this.manager = new Manager(this.player1, this.player2);
        this.playField = new PlayField(this, this.manager);
        this.playField.init();
    }
    gameOver(result){

    };
}
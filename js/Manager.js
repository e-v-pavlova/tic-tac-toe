class Manager{
    constructor(player1, player2){
        this.currentPlayer = player1;
        this.player1 = player1;
        this.player2 = player2;
    }
    changePlayer(){
        if (this.currentPlayer == this.player1)
            this.currentPlayer = this.player2;
        else
            this.currentPlayer = this.player1;
    }
}
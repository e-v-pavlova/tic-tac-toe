class Game {
    constructor (){
        this.player1 = new Player(1,'img/x.jpeg');
        this.player2 = new Player(2,'img/o.jpeg');
        this.manager = new Manager(this.player1, this.player2);
        this.playField = new PlayField(this, this.manager);
        this.playField.init();
    }
    gameOver(result){
        this.playField.lockCells();
        let message;
        switch (result){
            case 0:
                message = "Ничья!";
                break;
            case 1:
                message = "Победил первый игрок.";
                break;
            case 2:
                message = "Победил второй игрок."
        }
        this.showMessage(message);
        this.showContinueButton();
    };
    showMessage(message){
        const divMessage = document.createElement('div');
        divMessage.id = "game-over-message";
        divMessage.innerHTML = "<p> Игра окончена.</p><p>"+ message + "</p>";
        document.body.appendChild(divMessage);
    }
    showContinueButton(){
        const button = document.createElement('button');
        button.id = "continue-button";
        button.textContent = "Играть ещё";
        document.body.appendChild(button);
        const game = this;
        button.onclick = function(){
            game.playField.cleanCells();
            game.cleanInfo();
            game.manager.currentPlayer = game.player1;
        }
    }
    cleanInfo(){
        document.getElementById('game-over-message').remove();
        document.getElementById('continue-button').remove();
    }
}
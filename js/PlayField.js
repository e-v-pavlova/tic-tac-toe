class PlayField{
    constructor(game, manager){
        this.marks = Array.apply(null, Array(9)).map(Number.prototype.valueOf,0);
        this.manager = manager;
        this.game = game;
    }
    init(){
        const table = document.createElement('table');
        table.id = "play-field";
        document.body.appendChild(table);
        for (let i = 0; i < 3; i++){
            let row = document.createElement('tr');
            table.appendChild(row);
            for (let j = 0; j < 3; j++){
                let cell = document.createElement('td');
                row.appendChild(cell);
                cell.dataset.number = j + 3*i;
                if (i == j){
                    cell.style.width = "200px";
                    cell.style.height = "200px";
                }
            }
        }
        const playFiled = this;
        table.onclick = function(e){
            var target = e.target;
            while (target != table){
                if (target.tagName == 'TD'){
                    if (playFiled.cellIsEmpty(target)){
                        playFiled.drawMark(target);
                        if (playFiled.containsWinningLine(parseInt(target.dataset.number)))
                            playFiled.game.gameOver(playFiled.manager.currentPlayer.number);
                        else if (playFiled.isFilled())
                            playFiled.game.gameOver(0);
                        playFiled.manager.changePlayer();
                    };
                    return;
                }
                target = target.parentNode;
            }
        }
    }
    cellIsEmpty(cell){
        return (this.marks[cell.dataset.number] == 0) ? true : false;
    }
    drawMark(cell){
        cell.innerHTML = "<img src=" + this.manager.currentPlayer.markUrl + " >";  
        this.marks[cell.dataset.number] = this.manager.currentPlayer.number;
    }
    isFilled(){
        for (let i = 0; i < this.marks.length; i++){
            if (this.marks[i] == 0) return false;
        }
        return true;
    }
    containsWinningLine(cellNumber){
        const m = this.marks;
        switch (cellNumber){
            case 0:
                if ((m[0] != 0) && (m[0] == m[1] && m[0] == m[2]||
                                    m[0] == m[4] && m[0] == m[8]||
                                    m[0] == m[3] && m[0] == m[6]))
                    return true;
                break;
            case 1:
                if ((m[1] != 0) && (m[1] == m[0] && m[1] == m[2]||
                                    m[1] == m[4] && m[1] == m[7]))
                    return true;
                break;
            case 2:
                if ((m[2] != 0) && (m[2] == m[1] && m[2] == m[0]||
                                    m[2] == m[5] && m[2] == m[8]||
                                    m[2] == m[4] && m[2] == m[6]))
                    return true;
                break;
            case 3:
                if ((m[3] != 0) && (m[3] == m[0] && m[3] == m[6]||
                                    m[3] == m[4] && m[3] == m[5]))
                    return true;
                break;
            case 4:
                if ((m[4] != 0) && (m[4] == m[0] && m[4] == m[8]||
                                    m[4] == m[2] && m[4] == m[6]||
                                    m[4] == m[1] && m[4] == m[7]||
                                    m[4] == m[3] && m[4] == m[5]))
                    return true;
                break;
            case 5:
                if ((m[5] != 0) && (m[5] == m[2] && m[5] == m[8]||
                                    m[5] == m[3] && m[5] == m[4]))
                    return true;
                break;
            case 6:
                if ((m[6] != 0) && (m[6] == m[0] && m[6] == m[3]||
                                    m[6] == m[7] && m[6] == m[8]||
                                    m[6] == m[4] && m[6] == m[2]))
                    return true;
                break;
            case 7:
                if ((m[7] != 0) && (m[7] == m[1] && m[7] == m[4]||
                                    m[7] == m[6] && m[7] == m[8]))
                    return true;
                break;
            case 8:
                if ((m[8] != 0) && (m[8] == m[0] && m[8] == m[4]||
                                    m[8] == m[6] && m[8] == m[7]||
                                    m[8] == m[2] && m[8] == m[5]))
                    return true;
        }
        return false;
    }
    lockCells(){
        for (let i = 0; i < this.marks.length; i++){
            this.marks[i] = -1;
        }
    }
    cleanCells(){
        const cells = document.getElementById('play-field').querySelectorAll('td');
        for (let i = 0; i < this.marks.length; i++){
            this.marks[i] = 0;
            cells[i].innerHTML = '';
        }
    }
}
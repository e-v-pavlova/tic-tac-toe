class PlayField{
    render(){
        const table = document.createElement('table');
        document.body.appendChild(table);
        for (let i = 0; i < 3; i++){
            let row = document.createElement('tr');
            table.appendChild(row);
            for (let j = 0; j < 3; j++){
                let cell = document.createElement('td');
                row.appendChild(cell);
                if (i == j){
                    cell.style.width = "200px";
                    cell.style.height = "200px";
                }
            }
        }
    }
}
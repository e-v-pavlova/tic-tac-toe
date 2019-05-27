const playField = new PlayField();
playField.render();

const player1 = new Player(1,'img/x.jpeg');
const player2 = new Player(2,'img/o.jpeg');

const manager = new Manager(player1, player2);
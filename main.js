const prompt = require('prompt-sync')({sigint: true});
const { printBoard, updateCurrentPosition } = require('./modules/functions');
const Field = require('./modules/classes.js');

const myField = new Field([
    ['*', '░', 'O','░'],
    ['░', '░', '░','░'],
    ['░', 'O', '░','O'],
    ['░', '░', '░','░'],
    ['░', '^', '░','░'],
]);
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let currentPosition = [0, 0];
//u = up
//d = down
//l = left
//r = right

const main = () => {
    let game = true;
    while (game) {

        printBoard(myField);
        let n = prompt('Next move? ');

        currentPosition = updateCurrentPosition(n, currentPosition);
        
        if (currentPosition[0] < 0 || currentPosition[1] < 0) {
            // print your out of bound, lose and quit
            console.log('You went out of bounds! You lose!')
            game = false;
        } else if (myField.field[currentPosition[0]][currentPosition[1]] === hole) {
            //lose and quit
            console.log('You fell in a hole! You lose!')
            game = false;
        } else if (myField.field[currentPosition[0]][currentPosition[1]] === hat) {
            //win and quit
            console.log('You found your hat! You win!')
            game = false;
        } else {
            // update path on board
            myField.field[currentPosition[0]][currentPosition[1]] = pathCharacter;
        }
    }
    
}

main();

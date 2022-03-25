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
    printBoard(myField);
    // nextMove();
    //prompt next move?
    let n = prompt('Next move? ');
    updateCurrentPosition(n, currentPosition);
    console.log('Current position is: ', currentPosition);
}

main();
